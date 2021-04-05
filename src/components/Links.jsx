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
    gap: 20px;

    &&:not(:last-child) {
        margin-bottom: 20px;
    }
    && :first-child {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
    }
    && :first-child :nth-child(2) {
        color: hsl(180, 66%, 49%);
        text-decoration: none;
    }
  
    @media screen and (max-width: 830px) {
      flex-direction: column;
      display: flex;
      gap: 0;
      padding: 10px 0 10px 0;
      && :first-child {
        flex-direction: column;
        align-items: flex-start;
      }
      && div :first-child {
        width: 100%;
        border-width: 2px;
        border-color: rgb(158, 154, 167, 0.3);
        border-style: none none solid none;
        padding-bottom: 10px;
      }
      && div span {
        padding-left: 15px;
      }
      && :last-child  {
        padding: 10px 15px 0px 15px;
        align-items: center;
      }
    }
    `;
  const copied = {
    backgroundColor: 'hsl(257, 27%, 26%)',
    borderBox: 'box-sizing',
    padding: '10px 17px 10px 17px',
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
            <div>
              <button style={linkCopied == link.short_link ? copied : {borderRadius: '10px'}} onClick={() => copyToClipboard(link.short_link)}>{linkCopied == link.short_link ? 'Copied!' : 'Copy'}</button>
            </div>
          </LinksWrapper>
        );
      })}
    </div>
  );
}

export default Links;
