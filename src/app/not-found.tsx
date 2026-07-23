import BiosError from '@/components/Bios/BiosError';

export default function NotFound() {
  return (
    <BiosError
      code="404"
      title="BOOT DEVICE NOT FOUND"
      message="No bootable page exists at this address. The requested path could not be located on this system."
      beepCode="1 long, 2 short - Boot device error"
    />
  );
}
