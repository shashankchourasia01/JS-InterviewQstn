
// Hide Tab Content but loose all state 
{ isProfileOpen && <ProfileTab /> }





           //NEW FEATURE
// Hide tab but keep state { scroll, data, form inputs}
<Activity
    mode={isProfileOpen ? 'visible' : 'hidden'}
>

    <ProfileTab />

</Activity>