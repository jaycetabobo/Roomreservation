import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-secondary text-white text-center text-md-start' style={{marginTop:'30px'}}>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Ritz Hotel Reservation</h5>

            <p>
            When dreaming of Paris — of its centuries of history resulting in grand institutions, paeans to art, instantly identifiable architecture and sublime food — few modern-day edifices tie itself to the city as closely as the legendary Ritz Paris, opened by Cesar Ritz in 1898.
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Members</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='https://web.facebook.com/JayceLagoTabobo' className='text-white'>
                  Jayce Tabobo
                </a>
              </li>
              <li>
                <a href='https://web.facebook.com/angelica.torrejos2311' className='text-white'>
                  Angelica Torrejos
                </a>
              </li>
              <li>
                <a href='https://web.facebook.com/vicicri' className='text-white'>
                  Kenneth Pormento
                </a>
              </li>
              <li>
                <a href='https://web.facebook.com/seankirk.handayan.3' className='text-white'>
                  Sean Kirk Handayan
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>GitHub</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white'>
                  Click Me
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                Click Me
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                Click Me
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                Click Me
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://github.com/jaycetabobo/Roomreservation'>
          RitzHotel.com/GitHub
        </a>
      </div>
    </MDBFooter>
  );
}