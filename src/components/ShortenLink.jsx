/* eslint-disable max-len */
import React, {useState} from 'react';
import shrtcoApi from '../services/shrtcodeApi';
import Links from './Links.jsx';
// import styled from 'styled-components';

function ShortenLink() {
  // const IsLink = styled.div`
  //   color: red;
  //   position: absolute;
  //   left: 60px;
  //   bottom: 20px;
  // `;

  const [links, setLinks] = useState([]);
  // const [isLink, setIsLink] = useState(true);

  function handleClick(event) {
    const newLink = event.target.parentNode.firstChild.value;
    event.target.parentNode.firstChild.value = '';
    if (!newLink) {
      alert('You must add a link');
      setIsLink(false);
      return;
    };
    // setIsLink(true);
    shortenLink(newLink);
  }

  async function shortenLink(newLink) {
    const options = {
      method: 'GET',
      url: '/shorten',
      params: {
        url: newLink,
      },
    };
    const res = await shrtcoApi(options)
        .then((res) => res.data.result)
        .catch((err) => alert(`Error: ${err}`));
    setLinks([...links, {link: newLink, short_link: res.short_link}]);
    console.log(res.short_link);
  }

  return (
    <div>
      <div className="container-shorten bg-white-gray">
        <div className="shorten">
          {/* <div> */}
          <input type="text" placeholder="Shorten a link here..."/>
          {/* {!isLink && (
              <IsLink>Please add a link</IsLink>
            )} */}
          {/* </div> */}
          <button onClick={handleClick} className="button-shortenlink">Shorten It!</button>
        </div>

      </div>
      <Links links={links} />
    </div>
  );
}

export default ShortenLink;
