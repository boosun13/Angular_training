import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
//[..]で一つ上の階層という意味に
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[];

  constructor(private memberService: MemberService) { }

  //ライフサイクルメソット
  ngOnInit(): void {
    this.getMembers();
  }



  getMembers(): void {
    this.memberService.getMembers() //Observable
      .subscribe(members => this.members = members );
  }
}
