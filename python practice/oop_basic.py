#python oop basic

#python can not do function overloading but can do Polymorphism

#The first parameter of a classmethod function is the class itself

class car:
    def __init__(self, color, price):
        self.color = color
        self.price = price
        
    def returnInfo(self):
        return 'price: ' + str( self.price) + ' color: ' + self.color
        
    def printInfo(self):
        print('price: ' + str( self.price) + ' color: ' + self.color )
        
class bus(car):
    def __init__(self, color, price, capacity):
         super().__init__(color, price)
         self.capacity = capacity
         self.showWelcomMessage()
         print('This is the first constructor')
         
    def showWelcomMessage(self):
        print("class bus is created with " + super().returnInfo() + ' capacity: ' + str(self.capacity))
        
    def subprintInfo(self):
        print(super().returnInfo() + ' capacity: ' + str(self.capacity) )
        
    @staticmethod
    def resetCapacity(staticClass, newCapacity):
        staticClass.capacity = newCapacity
        print(staticClass.returnInfo() + ' capacity: ' + str(staticClass.capacity) )
        staticClass.printInfo()
        
    @classmethod
    def classmethodEx(cls , newCapacity):
        cls.capacity = newCapacity
        print('the classmethod class has capacity of '+ str( cls.capacity) )
        cls.printInfo(cls)
    
    #Polymorphism: rewrite the original function    
    def printInfo(self):
        print('I have reset this function')
        
        
    
        
Toyato = car('red', 500)
Toyato.printInfo()

myBus = bus('blue',2000, 15);
myBus.printInfo()
myBus.subprintInfo()



Toyato.printInfo()
myBus.printInfo()
print('--------------------------------------------------')

print('Here is the static method')
bus.resetCapacity(myBus,20)
print('Here is the class method')
bus.classmethodEx(30)
