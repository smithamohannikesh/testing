import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {UserList} from '../screen/UserList'
import {UserDetails} from '../screen/UserDetails'
const stack =createStackNavigator();
const Navigation =()=>{
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen

                    name="UserList"
                    component={UserList}
                    options={
                        {
                            title:"UserList",
                            headerStyle:{
                                    backgroundColor:"grey"
                            }
                        }
                    }
                />
                <stack.Screen

                    name="UserDetails"
                    component={UserDetails}
                    options={
                        {
                            title:"UserDetails",
                            headerStyle:{
                                    backgroundColor:"grey"
                            }
                        }
                    }
                />
            </stack.Navigator>
        </NavigationContainer>
    )

}
export default Navigation;
