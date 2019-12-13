import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

export function add(x, y) {
    return x + y
}

export function mutiply(x, y) {
    return x * y
}

export const instaPosts = [
    { id: 0, url: 'https://instagr.am/p/Zw9o4/' },
    { id: 1, url: 'https://instagr.am/p/Zw8o4/' },
  ];

export function RenderInstaPost(props) {
    const content = props.instaposts.map((post) =>
      <div className="column is-one-quarter">
        <InstagramEmbed
          url={post.url}
          maxWidth={320}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => { }}
          onSuccess={() => { }}
          onAfterRender={() => { }}
          onFailure={() => { }}
        />
      </div>
  
    );
    return (
      <div className="mediaposts">
        <div className="columns is-multiline is-mobile">
          {content}
        </div>
      </div>
    )
  };