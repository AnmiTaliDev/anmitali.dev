import BiosError from '@/components/Bios/BiosError';

export default function Forbidden() {
  return (
    <BiosError
      code="403"
      title="SYSTEM DISABLED - ACCESS DENIED"
      message="Too many invalid password attempts. Record the system disabled code below and contact your administrator."
      beepCode="System Disabled Code: 4A7C-91F0"
    />
  );
}
