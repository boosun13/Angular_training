import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[];


  constructor(
    private memberService: MemberService ,
    ) { }

  //ライフサイクルメソッド初期化されるタイミングで自動で立ち上がる。
  ngOnInit(): void {
    this.getMembers();
  }


  getMembers(): void {
    this.memberService.getMembers() //Observable
      .subscribe(members => this.members = members);
  }
}
