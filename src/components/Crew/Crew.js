import React from "react";
import Person from './Person'
import data from './data.json'
import douglas_image from './assets/image-douglas-hurley.png'
import mark_image from './assets/image-mark-shuttleworth.png'
import victor_image from './assets/image-victor-glover.png'
import ansari_image from './assets/image-anousheh-ansari.png'



function Crew() {
    const douglas = data.crew[0]
    const mark = data.crew[1]
    const victor = data.crew[2]
    const ansari = data.crew[3]
    return (
        <div className="crew-body" id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div>
                        <Person title = {douglas.role} name = {douglas.name} info = {douglas.bio} image = {douglas_image}/>
                    </div>
                </div>
                <div class="carousel-item">
                    <div>
                        <Person title = {mark.role} name = {mark.name} info = {mark.bio} image = {mark_image}/>
                    </div>
                </div>
                <div class="carousel-item">
                    <div>
                        <Person title = {victor.role} name = {victor.name} info = {victor.bio} image = {victor_image} />
                    </div>
                </div>
                <div class="carousel-item">
                    <div>
                        <Person title = {ansari.role} name = {ansari.name} info = {ansari.bio} image = {ansari_image} />
                    </div>
                </div>
            </div>
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Crew