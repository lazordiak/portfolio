import React from "react";
import logoStyles from "./logo.module.css"

export default () =>
<div className={logoStyles.container}>
  <div className={logoStyles.textContainer}>
    <div className={logoStyles.text}>
      Schuyler deVos
    </div>
  </div>
  <div className={logoStyles.imageContainer}>
    <img className={logoStyles.fox} src="fox.png" alt="A fox with glasses.">
    </img>
  </div>
</div>
