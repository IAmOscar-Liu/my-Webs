import java.util.Map;
import java.util.HashMap;


public class Student{
    private Map<String, String> info = new HashMap<>();
    
    public Student(String name, int age){
        info.put("name", name);
        info.put("age", Integer.toString(age));
    }
    
    public Map<String, String> get_student_info(){
        return info;
    }
}