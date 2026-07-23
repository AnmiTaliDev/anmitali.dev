'use client';

import BiosError from '@/components/Bios/BiosError';

export default function Error() {
  return (
    <BiosError
      code="500"
      title="CMOS CHECKSUM ERROR - SYSTEM HALTED"
      message="An unexpected fault occurred while rendering this screen."
      beepCode="1 long, 3 short - Memory error"
    />
  );
}
