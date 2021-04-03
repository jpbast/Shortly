/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import styled from 'styled-components';

function Links(props) {
  const LinksWrapper = styled.div`
    width: 100%;
    background-color: white;
    color: hsl(255, 11%, 22%);
    border-radius: 5px;
    padding: 10px 15px 10px 15px;
    display: flex;
    justify-content: space-between;
    
    &&:not(:last-child) {
        margin-bottom: 20px;
    }
    && div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding-right: 25px;
    }
    && div :nth-child(2) {
        color: hsl(180, 66%, 49%);
        text-decoration: none;
    }
    `;
  const copied = {
    backgroundColor: 'hsl(257, 27%, 26%)',
    borderBox: 'box-sizing',
    padding: '10px 20px 10px 20px',
    borderRadius: '10px',
  };

  const [linkCopied, setLinkCopied] = useState('');

  function copyToClipboard(id) {
    const r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    setLinkCopied(id);
  }

  return (
    <div className="container bg-gray">
      {props.links.map((link) => {
        return (
          <LinksWrapper>
            <div>
              <span>{link.link}</span>
              <span id={link.short_link}>{link.short_link}</span>
            </div>
            <button style={linkCopied == link.short_link ? copied : {borderRadius: '10px'}} onClick={() => copyToClipboard(link.short_link)}>{linkCopied == link.short_link ? 'Copied' : 'Copy'}</button>
          </LinksWrapper>
        );
      })}
    </div>
  );
}

export default Links;
