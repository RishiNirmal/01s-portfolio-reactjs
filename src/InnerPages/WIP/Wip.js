import React, { Component } from 'react'
import StepByStep from './StepByStep';
import Homer from "../../Images/timeline/homer.jpg"
import Remarkable from "../../Images/timeline/remarkable.jpg";
import Codewithme from "../../Images/timeline/codewithme.mp4";
import LikeImg from "../../Images/timeline/like.svg";
import Bookmark from "../../Images/timeline/bookmark.svg";
import Thought from "../../Images/timeline/thought.svg";
import MusicIcon from "../../Images/timeline/music.svg";
import CodeIcon from "../../Images/timeline/code.svg"
import SeanIcon from "../../Images/timeline/sean.svg"
import NextPrev from '../../CommonComponents/NextPrev';
import DateTime from './DateTime';
import Breadcrum from './Breadcrum';




export default class Wip extends Component {
  // monthlyPost = [
  //   {
  //     id: 1,
  //     titleMMYY: "February, 2021",
    
  // StepByStep:[
  //       {
  //         id: 1,
  //         Icons: Thought,
  //         mainTitle: "Hokusai Prints Drawings",
  //         dateTime: "2, February, 2021",
  //         p1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  //         p2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  //         p3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  //         p4: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  //         mainImage: Homer,
  //         ImageName: "Homer designs a car"

  //       },
  //       {
  //         id: 2,
  //         Icons: LikeImg,
  //         mainTitle: "Hokusai Prints Drawings",
  //         dateTime: "2, February, 2021",
  //         p1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  //         p2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  //         p3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  //         p4: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  //         mainImage: Remarkable,
  //         ImageName: "Homer designs a car"

  //       },


  //     ]

  //   }
  // ];

  render() {
    return (
      <>
        <Breadcrum />
        <div className="c-wip__timeline-holder">
          <DateTime titleMMYY= "February, 2021" />
          <StepByStep 
          Icons = {Thought}
          mainTitle= "Hokusai Prints Drawings"
          dateTime= "2, February, 2021"
          p1= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          p2= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          p3= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          p4= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          mainImage={Homer}
          ImageName= "Homer designs a car" 
          />
          <StepByStep 
          Icons = {Thought}
          mainTitle= "Hokusai Prints Drawings"
          dateTime= "2, February, 2021"
          p1= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          p2= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          p3= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          p4= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          mainImage={Homer}
          ImageName= "Homer designs a car" 
          />
           <DateTime titleMMYY= "March, 2022" />
          <StepByStep 
          Icons = {Thought}
          mainTitle= "Hokusai Prints Drawings"
          dateTime= "2, February, 2021"
          p1= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          p2= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          p3= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          p4= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          mainImage={Homer}
          ImageName= "Homer designs a car" 
          />
          <StepByStep 
          Icons = {LikeImg}
          mainTitle= "Hokusai Prints Drawings"
          dateTime= "2, February, 2021"
          p1= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          p2= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          p3= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          p4= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          mainImage={Remarkable}
          ImageName= "Homer designs a car" 
          />
          {/* {
            this.monthlyPost.map(item => <DateTime  />)

          }
          {
            this.StepByStep.map(item => <StepByStep />)

          } */}

        </div>

        <NextPrev />
      </>
    )
  }
}
