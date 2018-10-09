package hello;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class HttpRequestTest {

@LocalServerPort
private int port;

@Autowired
TestRestTemplate restTemplate;

@Test
public void greetingShouldReturnDefaultMessage() throws Exception {
	assertThat(this.restTemplate.getForObject("http://localhost:"+port,
			String.class)).contains("Hello World!");
}

	
}