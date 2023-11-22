import React from 'react';

Hello.defaultProps = {
    name: '이름없음'
}
function Hello({ color, name, isSpecial }) {
  return <div style={{ color }}>
    { isSpecial ? <b>*</b> : null}
    안녕하세요 {name}
    </div>
}


export default Hello;