import { useTracker } from 'meteor/react-meteor-data';

export default function useAuth() {
  const user = useTracker(() => Meteor.user());

  return {
    user,
    loggedIn: !!user
  };
}
