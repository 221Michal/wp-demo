import React from 'react';


class FacebookShare extends React.Component {
  render() {
    const { shareurl } = this.props;
    const encodedUrl = encodeURIComponent(shareurl);
    const srcString = `https://www.facebook.com/plugins/like.php?href=${encodedUrl}&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId`;

    return (
      <div>
        <iframe
          title='FBShareBtns'
          src={srcString}
          width={300}
          height={50}
          style={{ border: 'none', overflow: 'hidden', margin: '0 auto' }}
          scrolling="no"
          frameBorder="0"
         />
      </div>
    );
  }
}

export default FacebookShare;
