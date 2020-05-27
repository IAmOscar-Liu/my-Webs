
import java.util.List;
import java.util.ArrayList;
import java.util.stream.Collectors; 

public class Main
{
    public static List<Integer> myList = new ArrayList<>();
    
	public static void main(String[] args) {
		combination(6, 4); // Input the c(n, k)
	}
	
	public static void combination(int n, int k){
	    for(int i = 1; i <= n; i++){
	        myList.add(i);
	    }
	    System.out.println("All combination of C(" + n + ", " + k + "):");
	    returnCombination(myList, n, k).stream().forEach(el -> {
	        System.out.print("[");
	        for(int i = 0; i < el.length; i++){
	            System.out.print(el[i] + ((i == el.length-1) ? "" : ", "));
	        }
	        System.out.print("]\n");
	    });
	}
	
	
	public static ArrayList<int[]> returnCombination(List<Integer> _myList, int n, int k){
	    ArrayList<int[]> answers = new ArrayList<>();
	    if(k == 0){
	        answers.add(new int[]{});
	        return answers;
	    }
	    if(n == k){
	        int[] answer = new int[_myList.size()];
	        for(int i = 0; i < answer.length; i++){
	            answer[i] = _myList.get(i);
	        }
	        answers.add(answer);
	        return answers;
	    }
	    for(int i = 0; i <= n-k ; i++){
	        ArrayList<int[]> thisAnswers = returnCombination(new ArrayList(_myList.subList(i+1, _myList.size())), n-i-1, k-1);
	        for(int j = 0; j < thisAnswers.size(); j++){
	           int[] answer = new int[thisAnswers.get(j).length + 1];
	           answer[0] = _myList.get(i);
	           for(int x = 1; x < answer.length; x++){
	               answer[x] = thisAnswers.get(j)[x-1];
	           }
	           thisAnswers.set(j, answer); 
	        } 
	       answers.addAll(thisAnswers);
	    }
	    return answers;
	}
}
