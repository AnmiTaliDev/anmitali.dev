import BiosError from '@/components/Bios/BiosError';

export default function Unauthorized() {
  return (
    <BiosError
      code="401"
      title="AUTHENTICATION REQUIRED"
      message="Supervisor password required to access this screen."
      beepCode="3 short - Keyboard error"
    />
  );
}
