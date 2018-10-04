package com.prs;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;

import com.prs.business.user.User;
import com.prs.business.user.UserRepository;

@RunWith(SpringRunner.class)
public class PRSUserTest extends PrsWebApplicationTests {
@Autowired
private UserRepository userRepository;

@Test
public void testUserCrudFunctions() {
	Iterable<User> users = userRepository.findAll();
	assertNotNull(users);
	
	// add a user
	User u1 = new User("userName","pwd","fname","lname","phone","email",true,true);
	assertNotNull(userRepository.save(u1));
	int id = u1.getId();
	
	// get user & validate username is correct
	Optional<User> u2 = userRepository.findById(id);
	assertEquals(u2.get().getUserName(),"userName");
	
	// Update the user
	u2.get().setUserName("newUserName");
	assertNotNull(userRepository.save(u2.get()));
	
	// remove the user
	userRepository.delete(u2.get());
	assertThat(!(userRepository.findById(id)).isPresent());
	
	
}


	
	
}
