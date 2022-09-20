import React from "react";
import Equipment from "./Equipment";
import data from './data.json'
import launch_image from './image-launch-vehicle-portrait.jpg'
import spaceport_image from './image-spaceport-portrait.jpg'
import space_capsule_image from './image-space-capsule-portrait.jpg'

function Technology(){
    const launch = data.technology[0]
    const spaceport = data.technology[1]
    const space_capsule = data.technology[2]
    return(
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div>
                            <Equipment name = {launch.name} info = {launch.description} image = {launch_image}/>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div>
                        <Equipment name = {spaceport.name} info = {spaceport.description} image = {spaceport_image}/>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div>
                        <Equipment name = {space_capsule.name} info = {space_capsule.description} image = {space_capsule_image}/>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Technology;