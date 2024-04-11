import React from "react";

export default function About() {
    

    return (
        <div
            className="card my-3"
        >
            <img
                src="https://icones.pro/wp-content/uploads/2021/02/icone-d-ecriture-de-texte-png-symbole-noir.png"
                className="card-img-top my-5"
                style={{ height: 200, width: 200, alignSelf: "center" }}
                alt="..."
            />
            <div className="card-body">
                <h1 className="About Us my-3">UpperLowerHub</h1>
                <p className="card-text">
                    Explore the dynamic interplay of upper and lower case letter
                    with our diverse collection of text transformation.
                </p>
            </div>
        </div>
    );
}
