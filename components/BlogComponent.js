import React from "react";
import styles from "../styles/BlogComponent.module.css";
import Image from "next/image";

export default function BlogComponent(props) {
    return(
        <div className={styles.blogcomponent}>
            <div className={styles.blogcomponent__date}>{props.date}</div>
            <h1 className={styles.blogcomponent__title}>{props.title}</h1>
            <p className={styles.blogcomponent__description}>{props.description}</p>
            <span className={styles.blogcomponent__tag}>{props.tag}</span>
            <div className={styles.blogcomponent__imagecontain}>
                <Image className={styles.blogcomponent__image} src={props.image} alt={props.title} />
            </div>
        </div>
    )
}