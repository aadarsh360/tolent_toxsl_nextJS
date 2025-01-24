import ChatWithUs from '@/app/components/ChatWithUs'
import FooterToxsl from '@/app/components/FooterToxsl'
import Navbar2 from '@/app/components/Navbar2'
import PhoneWhatsAppLogo from '@/app/components/PhoneWhatsAppLogo'
import ScheduleMeeting from '@/app/components/ScheduleMeeting'
import React from 'react'

function page() {
  return (
    <>
    <Navbar2 />
    <PhoneWhatsAppLogo />
    <ChatWithUs />
    <ScheduleMeeting />
    <FooterToxsl />
    </>
  )
}

export default page
