import IconDashboard from '@icons/IconDashboard';

const CanvasPlaceholder = () => (
  <div
    id='gjs-placeholder'
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '18px',
      padding: '40px',
      textAlign: 'center',
      width: 'max-content',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '8px',
    }}
  >
    <IconDashboard />
    <div
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0px' }}
    >
      <span
        style={{
          fontFamily: 'arial',
          fontSize: '18px',
          color: '#4F5B67',
          fontWeight: 'normal',
        }}
      >
        Customize your user dashboard with powerful widgets
      </span>

      <span
        style={{
          fontFamily: 'arial',
          fontSize: '18px',
          color: '#4F5B67',
          margin: '0 0 10px',
          fontWeight: 'normal',
        }}
      >
        that allow for quick access to daily workflow processes.
      </span>
    </div>

    <button
      style={{
        backgroundColor: '#FF4D4D',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '20px',
        fontSize: '14px',
        cursor: 'pointer',
        width: 'max-content',
      }}
    >
      GET STARTED NOW
    </button>
  </div>
);

export default CanvasPlaceholder;
