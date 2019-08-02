import java.util.Map;
import java.util.HashMap;


public class Main
{
	public static void main(String[] args) {
        Student Jerry = new Student("Jerry", 24);
        Student Tony = new Student("Tony", 16);
        
        Map<String, String> Jerry_info = Jerry.get_student_info();
        Map<String, String> Tony_info = Tony.get_student_info();
        
        System.out.println(
            "name: " + Jerry_info.get("name") + ", age: " + Jerry_info.get("age")
        );
        System.out.println(
            "name: " + Tony_info.get("name") + ", age: " + Tony_info.get("age")
        );
	}
}
