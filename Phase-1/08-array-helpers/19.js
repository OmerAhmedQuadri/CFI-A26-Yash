const roles = ['admin','customer','manager']

const r = 'editor'

if (roles.includes(r)) {
    console.log('access granted');
}
else
    console.log('failed tp auth');
    
