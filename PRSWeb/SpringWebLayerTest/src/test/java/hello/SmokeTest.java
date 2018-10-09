package hello;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@RunWith(SpringRunner.class)
@SpringBootTest
public class SmokeTest {
	
	@Autowired
    private HomeController controller;
    
    @Test
    public void contextLoads() throws Exception  {
        assertThat(controller).isNotNull();
    }

}
