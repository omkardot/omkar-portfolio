import React, { Component } from "react";

export default class AndroidDevelopmentImg extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <svg
        id="android-development-illustration"
        data-name="Android Development"
        xmlns="http://www.w3.org/2000/svg"
        width="1120"
        height="829.80067"
        viewBox="0 0 1120 829.80067"
      >
        <title>Android Development</title>

        {/* Ground shadow */}
        <ellipse cx="850" cy="790" rx="145" ry="18" fill={theme.text} />

        {/* =========================
            LEFT MOBILE DEVICE
        ========================== */}

        <rect
          x="45"
          y="110"
          width="300"
          height="520"
          rx="28"
          fill={theme.compImgHighlight}
        />

        <rect
          x="60"
          y="90"
          width="300"
          height="520"
          rx="28"
          fill="none"
          stroke={theme.text}
          strokeWidth="3"
        />

        {/* Phone screen */}
        <rect
          x="82"
          y="135"
          width="256"
          height="430"
          rx="14"
          fill={theme.imageHighlight}
        />

        {/* Phone speaker */}
        <rect x="170" y="108" width="80" height="8" rx="4" fill={theme.text} />

        {/* App header */}
        <rect
          x="82"
          y="135"
          width="256"
          height="70"
          rx="14"
          fill={theme.jacketColor}
        />

        <circle cx="112" cy="170" r="15" fill={theme.imageHighlight} />

        <rect
          x="140"
          y="158"
          width="105"
          height="9"
          rx="4"
          fill={theme.imageHighlight}
        />

        <rect
          x="140"
          y="176"
          width="70"
          height="7"
          rx="3"
          fill={theme.imageHighlight}
        />

        {/* Location card */}
        <rect
          x="105"
          y="230"
          width="210"
          height="75"
          rx="12"
          fill={theme.compImgHighlight}
        />

        <circle cx="135" cy="268" r="19" fill={theme.jacketColor} />

        {/* Map pin */}
        <path
          d="M135 250c-9 0-16 7-16 16 0 12 16 25 16 25s16-13 16-25c0-9-7-16-16-16z"
          fill={theme.imageHighlight}
        />

        <circle cx="135" cy="266" r="5" fill={theme.jacketColor} />

        <rect x="165" y="254" width="105" height="8" rx="4" fill={theme.text} />

        <rect
          x="165"
          y="273"
          width="75"
          height="7"
          rx="3"
          fill={theme.jacketColor}
        />

        {/* Activity card */}
        <rect
          x="105"
          y="325"
          width="210"
          height="110"
          rx="12"
          fill={theme.compImgHighlight}
        />

        <polyline
          points="125 405 155 375 180 390 210 350 240 370 285 340"
          fill="none"
          stroke={theme.jacketColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle cx="125" cy="405" r="5" fill={theme.text} />
        <circle cx="155" cy="375" r="5" fill={theme.text} />
        <circle cx="180" cy="390" r="5" fill={theme.text} />
        <circle cx="210" cy="350" r="5" fill={theme.text} />
        <circle cx="240" cy="370" r="5" fill={theme.text} />
        <circle cx="285" cy="340" r="5" fill={theme.text} />

        {/* Bottom navigation */}
        <rect x="82" y="515" width="256" height="50" fill={theme.jacketColor} />

        <circle cx="125" cy="540" r="9" fill={theme.imageHighlight} />
        <circle cx="185" cy="540" r="9" fill={theme.imageHighlight} />
        <circle cx="245" cy="540" r="9" fill={theme.imageHighlight} />
        <circle cx="300" cy="540" r="9" fill={theme.imageHighlight} />

        {/* =========================
            ANDROID ROBOT
        ========================== */}

        <g>
          {/* Antennas */}
          <line
            x1="825"
            y1="270"
            x2="805"
            y2="240"
            stroke={theme.text}
            strokeWidth="8"
            strokeLinecap="round"
          />

          <line
            x1="895"
            y1="270"
            x2="915"
            y2="240"
            stroke={theme.text}
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Robot head */}
          <path
            d="M800 300
               C800 255 835 230 860 230
               C885 230 920 255 920 300
               L920 345
               C920 360 908 372 893 372
               L827 372
               C812 372 800 360 800 345Z"
            fill={theme.jacketColor}
          />

          {/* Eyes */}
          <circle cx="835" cy="300" r="7" fill={theme.imageHighlight} />

          <circle cx="885" cy="300" r="7" fill={theme.imageHighlight} />

          {/* Robot body */}
          <path
            d="M790 390
               C790 370 805 355 825 355
               L895 355
               C915 355 930 370 930 390
               L930 490
               C930 510 915 525 895 525
               L825 525
               C805 525 790 510 790 490Z"
            fill={theme.jacketColor}
          />

          {/* Left arm */}
          <rect
            x="755"
            y="370"
            width="35"
            height="125"
            rx="17"
            fill={theme.jacketColor}
          />

          {/* Right arm */}
          <rect
            x="930"
            y="370"
            width="35"
            height="125"
            rx="17"
            fill={theme.jacketColor}
          />

          {/* Left leg */}
          <rect
            x="810"
            y="515"
            width="35"
            height="115"
            rx="17"
            fill={theme.jacketColor}
          />

          {/* Right leg */}
          <rect
            x="875"
            y="515"
            width="35"
            height="115"
            rx="17"
            fill={theme.jacketColor}
          />

          {/* Android chest detail */}
          <rect
            x="820"
            y="400"
            width="80"
            height="55"
            rx="8"
            fill={theme.imageHighlight}
            opacity="0.9"
          />

          <circle cx="845" cy="427" r="7" fill={theme.jacketColor} />

          <circle cx="875" cy="427" r="7" fill={theme.jacketColor} />
        </g>

        {/* =========================
            DEVELOPER CHARACTER
        ========================== */}

        {/* Head */}
        <circle cx="570" cy="260" r="48" fill="#ffb9b9" />

        {/* Hair */}
        <path
          d="M520 255
             C515 215 545 185 585 195
             C615 202 625 235 610 265
             C595 248 580 245 565 250
             C550 255 535 265 520 255Z"
          fill={theme.dark}
        />

        {/* Body / jacket */}
        <path
          d="M510 315
             C485 325 465 355 460 395
             L440 555
             L535 555
             L555 410
             L585 410
             L605 555
             L700 555
             L680 390
             C675 350 650 325 620 315Z"
          fill={theme.jacketColor}
        />

        {/* Shirt */}
        <path
          d="M555 315
             L585 410
             L620 315
             L640 345
             L610 445
             L555 445
             L530 345Z"
          fill={theme.imageHighlight}
        />

        {/* Left arm */}
        <path
          d="M475 350
             C450 365 430 400 420 435
             L380 470
             C370 480 375 495 388 500
             C400 505 412 498 420 490
             L490 430
             L510 380Z"
          fill={theme.jacketColor}
        />

        {/* Right arm */}
        <path
          d="M665 350
             C690 370 705 410 720 445
             L750 475
             C760 485 758 500 745 507
             C733 514 720 507 713 498
             L650 440
             L630 385Z"
          fill={theme.jacketColor}
        />

        {/* Hand touching laptop */}
        <circle cx="380" cy="485" r="15" fill="#ffb9b9" />

        {/* Pants */}
        <path
          d="M535 545
             L605 545
             L625 700
             L580 700
             L560 610
             L545 700
             L500 700Z"
          fill={theme.dark}
        />

        {/* Shoes */}
        <path
          d="M500 690
             L545 690
             L550 720
             L490 720
             C480 710 485 698 500 690Z"
          fill={theme.dark}
        />

        <path
          d="M580 690
             L625 690
             L640 720
             L575 720
             C570 708 575 697 580 690Z"
          fill={theme.dark}
        />

        {/* =========================
            LAPTOP
        ========================== */}

        <path
          d="M400 555
             L690 555
             L720 720
             L370 720Z"
          fill={theme.text}
        />

        <rect
          x="415"
          y="575"
          width="260"
          height="120"
          rx="5"
          fill={theme.compImgHighlight}
        />

        {/* Code lines */}
        <rect
          x="435"
          y="595"
          width="75"
          height="8"
          rx="4"
          fill={theme.jacketColor}
        />

        <rect
          x="520"
          y="595"
          width="100"
          height="8"
          rx="4"
          fill={theme.imageHighlight}
        />

        <rect
          x="435"
          y="620"
          width="120"
          height="8"
          rx="4"
          fill={theme.imageHighlight}
        />

        <rect
          x="565"
          y="620"
          width="75"
          height="8"
          rx="4"
          fill={theme.jacketColor}
        />

        <rect
          x="435"
          y="645"
          width="55"
          height="8"
          rx="4"
          fill={theme.jacketColor}
        />

        <rect
          x="500"
          y="645"
          width="135"
          height="8"
          rx="4"
          fill={theme.imageHighlight}
        />

        <rect
          x="435"
          y="670"
          width="100"
          height="8"
          rx="4"
          fill={theme.imageHighlight}
        />

        {/* Laptop base */}
        <path
          d="M350 720
             L740 720
             L765 745
             L325 745Z"
          fill={theme.dark}
        />

        {/* =========================
            FLOATING CODE CARD
        ========================== */}

        <rect
          x="440"
          y="70"
          width="310"
          height="145"
          rx="12"
          fill={theme.compImgHighlight}
        />

        <rect
          x="455"
          y="55"
          width="310"
          height="145"
          rx="12"
          fill="none"
          stroke={theme.text}
          strokeWidth="2"
        />

        {/* Window buttons */}
        <circle cx="480" cy="80" r="6" fill={theme.jacketColor} />

        <circle cx="500" cy="80" r="6" fill={theme.imageHighlight} />

        <circle cx="520" cy="80" r="6" fill={theme.text} />

        {/* Code */}
        <rect
          x="480"
          y="110"
          width="75"
          height="7"
          rx="3"
          fill={theme.jacketColor}
        />

        <rect x="565" y="110" width="125" height="7" rx="3" fill={theme.text} />

        <rect
          x="500"
          y="130"
          width="115"
          height="7"
          rx="3"
          fill={theme.imageHighlight}
        />

        <rect
          x="625"
          y="130"
          width="75"
          height="7"
          rx="3"
          fill={theme.jacketColor}
        />

        <rect x="500" y="150" width="70" height="7" rx="3" fill={theme.text} />

        <rect
          x="580"
          y="150"
          width="105"
          height="7"
          rx="3"
          fill={theme.imageHighlight}
        />

        <rect
          x="480"
          y="175"
          width="150"
          height="7"
          rx="3"
          fill={theme.jacketColor}
        />

        {/* =========================
            ANDROID / KOTLIN BADGES
        ========================== */}

        {/* Android badge */}
        <circle cx="980" cy="175" r="55" fill={theme.compImgHighlight} />

        <path
          d="M950 190
             C950 160 965 145 980 145
             C995 145 1010 160 1010 190
             L1010 205
             L950 205Z"
          fill={theme.jacketColor}
        />

        <line
          x1="960"
          y1="150"
          x2="950"
          y2="135"
          stroke={theme.jacketColor}
          strokeWidth="5"
          strokeLinecap="round"
        />

        <line
          x1="1000"
          y1="150"
          x2="1010"
          y2="135"
          stroke={theme.jacketColor}
          strokeWidth="5"
          strokeLinecap="round"
        />

        <circle cx="967" cy="172" r="4" fill={theme.imageHighlight} />

        <circle cx="993" cy="172" r="4" fill={theme.imageHighlight} />

        {/* Kotlin badge */}
        <rect
          x="910"
          y="575"
          width="130"
          height="90"
          rx="15"
          fill={theme.compImgHighlight}
        />

        <path
          d="M930 595
             L975 595
             L950 620
             L985 620
             L945 650
             L930 650Z"
          fill={theme.jacketColor}
        />

        <rect
          x="995"
          y="595"
          width="25"
          height="25"
          fill={theme.imageHighlight}
        />

        {/* =========================
            GEAR / DEVELOPMENT ICON
        ========================== */}

        <circle cx="960" cy="390" r="48" fill={theme.compImgHighlight} />

        <circle
          cx="960"
          cy="390"
          r="20"
          fill="none"
          stroke={theme.jacketColor}
          strokeWidth="10"
        />

        <path
          d="M960 350v-12
             M960 442v-12
             M920 390h-12
             M1012 390h-12
             M932 362l-9-9
             M997 427l-9-9
             M932 418l-9 9
             M997 353l-9 9"
          stroke={theme.jacketColor}
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* =========================
            DECORATIVE ELEMENTS
        ========================== */}

        <rect
          x="385"
          y="265"
          width="18"
          height="18"
          fill={theme.imageHighlight}
        />

        <rect x="415" y="265" width="18" height="18" fill={theme.jacketColor} />

        <rect x="445" y="265" width="18" height="18" fill={theme.text} />

        <circle cx="1030" cy="510" r="12" fill={theme.imageHighlight} />

        <circle cx="1070" cy="540" r="8" fill={theme.jacketColor} />

        <circle cx="1010" cy="550" r="6" fill={theme.text} />
      </svg>
    );
  }
}
