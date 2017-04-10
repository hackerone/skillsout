Meteor.methods({
    setRememberMe: function (expireDays) {
        /* check if for logged in user sessionExpiration is already set or not */
        if (Accounts.config.loginExpirationInDays) {
            Accounts.config({
                loginExpirationInDays: expireDays //remember user for 30 day
            });
            return 'login session expiration set';
        }
    },
    searchUsersData: function (params) {
        var select = {
            'emails.address': {
                $regex: params.querySearch
            }
        };
        select['roles.' + params.businessId] = {
            $exists: false
        };
        var users = Meteor.users.find(select, {
            fields: {
                'emails': 1,
                'profile.picture': 1
            }
        }).fetch();
        return users;
    }
});