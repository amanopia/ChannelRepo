import React from "react";
import "./NewFile.css";
import twi from "../../assets/twi.png";
import slogan2 from "../../assets/slogan2.svg";
import slogan3 from "../../assets/slogan3.svg";
const NewFile = () => {
  return (
    <div className="mid-section">
      <h1 className="heading-new-tab">Opening new tabs is sh*t!</h1>
      <div className="tag">
        <div className="tag-1">
          <img src={slogan2} alt="" />
          <svg
            width="42"
            height="38"
            viewBox="0 0 42 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_992_20705)">
              <path
                d="M40.9307 10.422C41.3809 12.0722 40.6585 13.3427 39.8412 14.4267C38.6841 15.9196 37.3547 17.3047 35.9302 18.5034C29.2234 23.8535 21.4756 25.8576 13.0024 24.9813C10.849 24.7508 8.69294 24.2083 6.30372 23.7458C6.77419 25.9732 8.56532 27.6426 9.17649 29.9155C8.16251 29.8466 7.70488 29.1796 7.31064 28.6369C5.70197 26.4041 4.1085 24.1243 2.57714 21.8128C1.85075 20.6957 1.95461 20.055 3.07246 19.4832C5.38545 18.2609 7.84556 17.8645 10.3907 18.3255C10.4845 18.3559 10.5796 18.5423 10.7532 18.806C9.58358 20.6579 7.15623 19.3531 5.65571 20.7866C8.6484 22.5857 11.9261 23.0246 15.2013 23.1515C18.6323 23.2769 22.0139 23.0751 25.2953 22.0627C28.5145 21.082 31.37 19.4648 34.1607 17.5673C36.9832 15.7319 39.1617 13.3248 40.9307 10.422Z"
                fill="black"></path>
            </g>
            <defs>
              <clipPath id="clip0_992_20705">
                <rect
                  width="28.3944"
                  height="34.4457"
                  fill="white"
                  transform="translate(41.5176 10.6121) rotate(107.943)"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="tag-2">
          <div>
            <img src={twi} alt="" />
            <p>Findtrend - Elon Musk</p>
          </div>
        </div>
        <div className="tag-3">
          <svg
            width="42"
            height="38"
            viewBox="0 0 42 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_992_20705)">
              <path
                d="M40.9307 10.422C41.3809 12.0722 40.6585 13.3427 39.8412 14.4267C38.6841 15.9196 37.3547 17.3047 35.9302 18.5034C29.2234 23.8535 21.4756 25.8576 13.0024 24.9813C10.849 24.7508 8.69294 24.2083 6.30372 23.7458C6.77419 25.9732 8.56532 27.6426 9.17649 29.9155C8.16251 29.8466 7.70488 29.1796 7.31064 28.6369C5.70197 26.4041 4.1085 24.1243 2.57714 21.8128C1.85075 20.6957 1.95461 20.055 3.07246 19.4832C5.38545 18.2609 7.84556 17.8645 10.3907 18.3255C10.4845 18.3559 10.5796 18.5423 10.7532 18.806C9.58358 20.6579 7.15623 19.3531 5.65571 20.7866C8.6484 22.5857 11.9261 23.0246 15.2013 23.1515C18.6323 23.2769 22.0139 23.0751 25.2953 22.0627C28.5145 21.082 31.37 19.4648 34.1607 17.5673C36.9832 15.7319 39.1617 13.3248 40.9307 10.422Z"
                fill="black"></path>
            </g>
            <defs>
              <clipPath id="clip0_992_20705">
                <rect
                  width="28.3944"
                  height="34.4457"
                  fill="white"
                  transform="translate(41.5176 10.6121) rotate(107.943)"></rect>
              </clipPath>
            </defs>
          </svg>
          <img src={slogan2} alt="" />
        </div>
      </div>
      <p>
        A solution for your browser that doesn't make your device slow over
        time. Discover a trend with just one tab
      </p>
    </div>
  );
};

export default NewFile;
