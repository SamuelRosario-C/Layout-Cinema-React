import search from './assets/search.svg'
import logo from './assets/logo.svg'
import notification from './assets/notification.svg'
import accountIcon from './assets/accountIcon.svg'
import imgKid from './assets/imgKid.png'

import React from 'react'
import {
  Container,
  ChoiceOpts,
  Categories,
  Contents,
  FooterOpts,
  ItemOpts
} from './styles'



function App() {
  return (
    //div principal
    <Container>

      {/* header */}
      <ChoiceOpts>
        <ItemOpts>
          <a href="#">
            <img src={accountIcon} alt="account" />
          </a>
          
            <img src={imgKid} alt="" />
        </ItemOpts>

        <img src={logo} alt="Logo" />
        <ItemOpts>

          <div>
            <input type="text" />

            <button>
              <img src={search} alt="search" />
            </button>

          </div>

          <a href="#">
            <img src={notification} alt="Notificação" />
          </a>

        </ItemOpts>
      </ChoiceOpts>

      {/* nav */}
      <Categories>
        
      </Categories>

      {/* section */}
      <Contents>

      </Contents>

      {/* Footer */}
      <FooterOpts>

      </FooterOpts>
    </Container>
  );
}

export default App;
