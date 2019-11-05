import React from 'react';
import photo_1 from '../images/add/comm_1.png';
import photo_2 from '../images/add/comm_2.png';
import photo_3 from '../images/add/comm_3.png';

export const GlCommunity = (props) => {
  let article = props.articulos
  return (
    <section className="communityGl">
      <div className="flex alignLf comContGl">
        <div>
          <h2>35FIT Community</h2>
          <h4 className="darkblue">#CONNECTEDTO<span className="lightgreen">RESULTS</span></h4>
        </div>
        <div>
          <h5>{article.text_04}</h5>
        </div>
      </div>
      <div className="flex wrap comImgGl">
        <img src={photo_1} alt="" />
        <img src={photo_2} alt="" />
        <img src={photo_3} alt="" />
        <img src={photo_1} alt="" />
      </div>
      <p className="cameraGl lightgreen"><span></span>@35fit_club</p>
    </section>
  );
}
