import React, { FC } from 'react';

import UseAppData, { Invite, TeamMember } from './App.hook';
import styles from './app.module.scss'
import Admin from './assets/icons/admin.svg'
import User from './assets/icons/user.svg'
import Arrow from './assets/icons/arrow.svg'

type ItemProps = {
  memberData?: TeamMember
  inviteData?: Invite
}

const Item:FC<ItemProps> = ({memberData, inviteData}) =>{

  return (
    <React.Fragment>
      {memberData 
      ? <div className={styles.line} key={memberData.id}>{memberData.user.name}{" "}{memberData.user.lastName}  <img src={Arrow} alt="" /> </div> 
      :  <div className={styles.line} key={inviteData?.id}><span>{inviteData?.phone}</span><div>Invited</div> <img src={Arrow} alt="" /></div>}
    </React.Fragment>
    
  )

}

const App = () => {

  const {invite, teamMember} = UseAppData()
  const administratorMember = teamMember.filter(el => el.role === "Administrator")
  const standartMember = teamMember.filter(el => el.role === 'Standard')

  const administratorInvite = invite.filter(el => el.role ==="Administrator")
  const standartInvite = invite.filter(el=> el.role === 'Standard')
  return (
    <div className={styles.app}>
      <div className={styles.admin}>
          <div className={styles.title}><img src={Admin} alt="" /> Administrators</div>
          <div className={styles.data}>
            {administratorMember.map(el => <Item  key={el.id} memberData={el}/> )}
            {administratorInvite.map(el =>  <Item  key={el.id} inviteData={el}/>)}
          </div>
      </div>
      <div className={styles.standardUsers}>
        <div className={styles.title}>
          <img src={User} alt="" />
          Standard Users
        </div>
        <div className={styles.data}>
        {standartMember.map(el => <Item  key={el.id} memberData={el}/> )}
        {standartInvite.map(el =>  <Item  key={el.id} inviteData={el}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
