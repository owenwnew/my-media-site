import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uncensered-snapshots',
  templateUrl: './uncensered-snapshots.component.html',
  styleUrls: ['./uncensered-snapshots.component.css']
})
export class UncenseredSnapshotsComponent implements OnInit {
uncensoredSnapShots=[{
  title: 'uncensoredImg1',
  imgSource:'http://img04.deviantart.net/569e/i/2017/005/6/7/nier_automata___2b_by_l3monjuic3-daue0cr.jpg'},
{
  title: 'uncensoredImg2',
  imgSource:'https://vignette4.wikia.nocookie.net/nier/images/e/e6/YoRHa_Type_A_No.2_SS3.png/revision/latest?cb=20160421230313'},
{
  title: 'uncensoredImg3',
  imgSource:'https://images5.alphacoders.com/655/655989.jpg'},
{
  title: 'uncensoredImg4',
  imgSource:'https://images6.alphacoders.com/819/thumb-1920-819005.jpg'}];
  constructor() { }

  ngOnInit() {
  }

}
