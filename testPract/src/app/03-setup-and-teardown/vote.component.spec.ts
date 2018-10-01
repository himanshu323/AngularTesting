import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let voteComp:VoteComponent;
  beforeEach(()=>{
    voteComp=new VoteComponent();
  })
  it('should increment the votes on upvote', () => {

    voteComp.upVote();

    expect(voteComp.totalVotes).toBe(1);
  });

  it('should decrement the votes on downvote', () => {

    voteComp.downVote();
    expect(voteComp.totalVotes).toBe(-1);
  });
});