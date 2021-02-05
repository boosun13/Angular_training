import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})

//こちらの方を先にコーディングする
export class MemberDetailComponent implements OnInit {
  @Input() member: Member;

  constructor(
    //URLやハッシュフラグメントを取得する
    private route: ActivatedRoute,
    private memberService: MemberService,
    // ブラウザーバッグをアンギュラーを通す
    private location: Location

    ) { }

  ngOnInit(): void {
    this.getMember();
  }

  getMember(): void{
    //idから取得できる
    const id = +this.route.snapshot.paramMap.get('id');
    this.memberService.getMember(id)
      .subscribe(member => this.member = member);
  }

  goBack(): void {
    this.location.back();
  }

}
