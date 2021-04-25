/* eslint-disable max-len */
import React, {useState, useContext} from 'react';
import {LoadingContext} from '../contexts/LoadingContext';
import shrtcoApi from '../services/shrtcodeApi';
import Links from './Links.jsx';

function ShortenLink() {
  const [links, setLinks] = useState([]);
  const loadingCtx = useContext(LoadingContext);
  const setLoading = loadingCtx[1];

  function handleClick(event) {
    const newLink = event.target.parentNode.firstChild.value;
    event.target.parentNode.firstChild.value = '';
    if (!newLink) {
      alert('You must add a link');
      setIsLink(false);
      return;
    };
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

    setLoading(true);
    const res = await shrtcoApi(options)
        .then((res) => res.data.result)
        .catch((err) => alert(`Error: ${err}`));
    setLoading(false);
    setLinks([...links, {link: newLink, short_link: res.short_link}]);
    console.log(res.short_link);
  }

  return (
    <div>
      <div className="container-shorten bg-white-gray">
        <div className="shorten">
          <input type="text" placeholder="Shorten a link here..."/>
          <button onClick={handleClick} className="button-shortenlink">Shorten It!</button>
        </div>

      </div>
      <Links links={links} />
    </div>
  );
}

export default ShortenLink;
