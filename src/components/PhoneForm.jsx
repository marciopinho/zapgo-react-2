import { useState, useEffect } from "react";
import Headers from './Headers'
// import PhoneInput from 'react-phone-input-2'
// import '../../public/style.css'
// import 'react-phone-input-2/lib/semantic-ui.css'

export default function PhoneForm() {

  const [phone, setPhone] = useState('');

  useEffect(() => {
    getCountryIsoCode('https://ipapi.co/json/?fields=61439')
  }, [])

  const getCountryIsoCode = async (url) => {
    let data;
    const res = await fetch(url)
    data = await res.json();

    const countryCode = data.country_calling_code

    setPhone(countryCode)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const cleanPhone = phone.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanPhone}`)
  }

  return (
    <form onSubmit={handleSubmit} className="phone-form">
      <Headers />

      <div className="user-input">
        {/* <PhoneInput
          // inputClass="plain"
          // className="form-control"
          value={phone}
          onChange={phone => setPhone(phone)}
        /> */}
        <button className="form-control btn btn-success">Send</button>
      </div>
    </form>
  )

}