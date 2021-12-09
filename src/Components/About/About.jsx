import React from "react";
import styles from "./About.module.css";
import {
  DingdingOutlined,
  CloudUploadOutlined,
  AlertOutlined,
  ExperimentOutlined,
  LikeOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const About = () => {
  return (
    <div className={styles.main}>
      <div className={styles.image_container}></div>
      <div className={styles.main_container}>
        <h1>About this blog</h1>
        <p>
          Video Catalog is free HTML CSS template for your website. This
          Bootstrap v4.4.1 website template is 100% free download for everyone.
          You can modify and expand this template for your CMS websites. You can
          use it for commercial or non-commercial work. If you wish to support
          TemplateMo, please contact us. 1
        </p>
        <p>
          You are not allowed to re-distribute the template ZIP file on any
          template collection website. 2
        </p>
        <p>
          Vivamus sit amet justo sed erat iaculis consequat. Nulla suscipit
          posuere lectus ut venenatis. Proin sed orci eget tellus euismod
          vulputate eu eu arcu. Etiam a bibendum lorem. Curabitur ac bibendum
          odio. Vivamus euismod dui mauris, ut tincidunt mi congue quis.
        </p>
      </div>
      <div className={styles.second_image}></div>
      <div className={styles.card_container}>
        <div className={styles.card} variant="outlined">
          <DingdingOutlined className={styles.icon_size} />
          <h2>Cras convallis mollis justo</h2>
          <p>
            Aliquam in congue diam, non tincidunt ligula. Suspendisse facilisis
            elit eget quam semper aliquet. Donec ut purus aliquet, imperdiet
            lacus id, faucibus lectus.
          </p>
        </div>
        <div className={styles.card} variant="outlined">
          <CloudUploadOutlined className={styles.icon_size} />{" "}
          <h2>Nullam dictum pretium</h2>
          <p>
            Nam dapibus lectus ultricies neque feugiat eleifend. Donec ornare
            dolor suscipit metus hendrerit, vel malesuada neque mattis. Fusce
            posuere cursus mattis.
          </p>
        </div>
        <div className={styles.card} variant="outlined">
          <AlertOutlined className={styles.icon_size} />
          <h2>Etiam in quam dolor</h2>
          <p>
            Sed dapibus vulputate diam nec hendrerit. In libero purus, interdum
            vitae purus nec, convallis sollicitudin nunc. Curabitur maximus
            maximus ex a scelerisque.
          </p>
        </div>
        <div className={styles.card} variant="outlined">
          <ExperimentOutlined className={styles.icon_size} />
          <h2>Duis ornare felis nec orci</h2>
          <p>
            Quisque vestibulum lectus eros, tincidunt ultricies ante euismod
            non. Ut sed consequat est, quis lobortis lorem. Nullam dictum
            pretium mauris eu aliquam.
          </p>
        </div>
        <div className={styles.card} variant="outlined">
          <LikeOutlined className={styles.icon_size} />
          <h2>Class aptent taciti sociosqu</h2>
          <p>
            Maecenas et libero in eros laoreet finibus sed vitae diam. Etiam
            consetetur, nunc sed pretium elementum, diam erat fringilla tortor,
            placerat condimentum.
          </p>
        </div>
        <div className={styles.card} variant="outlined">
          <SettingOutlined className={styles.icon_size} />
          <h2>Suspendisse ut malesuada</h2>
          <p>
            Vestibulum non lectus id lacus aliquet porttitor in non nulla.
            Aenean urna diam, finibys id lorem nec, feugiat convallis dolor.
            Integer aliquam, eros eget rutrum iaculis.
          </p>
        </div>
      </div>
      <div className={styles.third_image}></div>
    </div>
  );
};

export default About;
