package com.prs.business.user;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

	User findByuserNameAndPassword(String userName, String password);

}
