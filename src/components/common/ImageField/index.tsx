import { Pencil1Icon, PersonIcon, PlusIcon, TrashIcon } from '@radix-ui/react-icons';
import { Flex } from '@radix-ui/themes';
import React from 'react';

interface Props {
  value?: string; // Blob type as a base64 string
  onChange?: (value: string) => void;
}

const ImageField = ({ value, onChange }: Props) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          onChange?.(reader.result as string); // Passing the base64 string
        }
      };
      reader.readAsDataURL(file); // Convert file to base64 string
    }
  };

  const handleClick = () => {
    document.getElementById('imageInput')?.click();
  };

  return (
    <div>
      <input id='imageInput' type='file' accept='image/*' style={{ display: 'none' }} onChange={handleFileChange} />
      <div
        onClick={handleClick}
        style={{
          width: '200px',
          height: '200px',
          border: '1px solid #eaecee',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundSize: 'cover',
          backgroundImage: value ? `url(${value})` : 'none',
          padding: '20px',
          position: 'relative',
          boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.05)',
        }}
      >
        {!value && <PersonIcon color={'grey'} height={'100%'} width={'100%'} />}
        {value && (
          <Flex
            width={'40px'}
            height={'40px'}
            justify={'center'}
            align={'center'}
            style={{
              backgroundColor: 'var(--brand-color)',
              borderRadius: '100%',
              position: 'absolute',
              left: 10,
              bottom: 10,
            }}
            onClick={(e) => {
              e.stopPropagation();
              onChange?.('');
            }}
          >
            <TrashIcon height={'20px'} width={'20px'} color={'white'} />
          </Flex>
        )}
        <Flex
          width={'40px'}
          height={'40px'}
          justify={'center'}
          align={'center'}
          style={{
            backgroundColor: 'var(--brand-color)',
            borderRadius: '100%',
            position: 'absolute',
            right: 10,
            bottom: 10,
          }}
        >
          {!value ? (
            <PlusIcon height={'30px'} width={'30px'} color={'white'} />
          ) : (
            <Pencil1Icon height={'30px'} width={'30px'} color={'white'} />
          )}
        </Flex>
      </div>
    </div>
  );
};

export default ImageField;
