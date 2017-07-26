import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-censered-snapshots',
  templateUrl: './censered-snapshots.component.html',
  styleUrls: ['./censered-snapshots.component.css']
})
export class CenseredSnapshotsComponent implements OnInit {
censoredSnapShots = [
{
  title: 'cencoredImg1',
  imgSource:'https://c2.staticflickr.com/4/3723/32272656804_ccca70cc7e_o.png'},
{
  title: 'cencoredImg2',
  imgSource:'http://gematsu.com/wp-content/uploads/2017/01/Horizon-Zero-Dawn_01-30-17.jpg'},
{
  title: 'cencoredImg3',
  imgSource:'https://spikeybits.com/wp-content/uploads/2017/01/horizon-zero-dawn-screen-06-ps4-us-03oct16.jpg'},
{
  title: 'cencoredImg4',
  imgSource:'http://s3.amazonaws.com/digitaltrends-uploads-prod/2015/11/fallout-4_111.jpg'}];


  constructor() { }

  ngOnInit() {
  }

}
