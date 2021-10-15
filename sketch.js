



       var noballs = 0x0001,
            yesballs = 0x0002,
            nowalls = 0x0004,
           yeswalls = 0x0008;
           yesmouse = 0x0016
        let engine = Matter.Engine.create();
        let score = 0
        let level = 1
        let wait = 0
        let birds = 0
        

        
        let render = Matter.Render.create({
            element: document.body,
            engine: engine,
            options: {
                width: 1700,
                height: 900,
                wireframes: false
            }
        });
        


        // 1. Level
        let boxA = Matter.Bodies.rectangle(900, 359, 25, 100, {collisionFilter: {category:yesballs}, render: {sprite: {texture: ("./Assets/wood.png"),xScale: 0.4,yScale: 0.5}}})
        let boxB = Matter.Bodies.rectangle(970, 359, 25, 100, {collisionFilter: {category: yesballs},render: {sprite: {texture: ("./Assets/wood.png"),xScale: 0.4,yScale: 0.5}}})
        let boxC = Matter.Bodies.rectangle(935, 309, 100, 25,{collisionFilter:{category: yesballs}, render: {sprite: {texture: ("./Assets/wood90.png"),xScale: 0.45,yScale: 0.4}}})
        let Pig1 = Matter.Bodies.rectangle(935,399,45,45,{collisionFilter:{category: yesballs}})
        let Pig2 = Matter.Bodies.rectangle(935,259,45,45,{collisionFilter:{category: yesballs}})
        let Pig3 = Matter.Bodies.rectangle(935,499,45,45,{collisionFilter:{category: yesballs}})
        
            let ground1=Matter.Bodies.rectangle(930, 420, 200, 25, {
            isStatic: true,
            render: {
             sprite: {
            texture: "./Assets/ground.png",
            yScale: 0.33 ,
            xScale: 2.8
      }
    }
  });
        

            let ground3=Matter.Bodies.rectangle(300, 550, 200, 50, {
            isStatic: true,
            render: {
             sprite: {
            texture: "./Assets/ground.png",
            yScale: 0.75 ,
            xScale: 2.8
      }
    }
  });

            let ground4=Matter.Bodies.rectangle(300, 600, 300, 50, {
             isStatic: true,
            render: {
             sprite: {
            texture: "./Assets/ground.png",
            yScale: 0.75 ,
            xScale: 4.4
        }
    }
});

            let ground5=Matter.Bodies.rectangle(300, 700, 400, 150, {
             isStatic: true,
             render: {
              sprite: {
             texture: "./Assets/ground.png",
             yScale: 2.2 ,
             xScale: 5.7
}
}
});

            let ground2=Matter.Bodies.rectangle(775, 800, 1900, 159, {
                isStatic: true,
               render: {
                sprite: {
               texture: "./Assets/ground.png",
              yScale: 2.5 ,
             xScale: 27
        }
    }
});

            let ground6=Matter.Bodies.rectangle(930, 420, 200, 25, {
                isStatic: true,
                render: {
                 sprite: {
                  texture: "./Assets/ground.png",
                  yScale: 0.33 ,
                 xScale: 2.8
        }
    }
});
  
        // Slingshot position and size
        let ball = Matter.Bodies.circle(300, 400, 15,{collisionFilter: {category : yesballs}});
        let sling = Matter.Constraint.create({
            pointA: { x: 300, y: 400 },
            bodyB: ball,
            stiffness: 0.008,
            collisionFilter: {category:noballs,yesballs}
        });

        const mouse = Matter.Mouse.create(render.canvas);
        let mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                render: { visible: false }
            }
        });

        

        onmousemove = function(e){

        if (e.clientX <= 300){
            mouseConstraint.collisionFilter.category = yesballs
            mouseConstraint.collisionFilter.mask =  4294967295

        }else if (e.clientX > 300){
            mouseConstraint.collisionFilter.category = noballs
            mouseConstraint.collisionFilter.mask = nowalls
        }
        if (Pig1.position.y >= 500){
            Pig1.position.y = -300
            Matter.World.remove(engine.world, [Pig1])
            score = score +1
            
        }
        if (Pig2.position.y >= 500){
            Pig2.position.y = -300
            Matter.World.remove(engine.world, [Pig2])
            score = score +1
            
        }
        if (Pig3.position.y >= 500){
            Pig3.position.y = -300
            Matter.World.remove(engine.world, [Pig3])
            score = score +1
            
        }



            //2. Level
        if (score === 2 && level === 1){
            Matter.World.remove(engine.world, [stack,boxA,boxB,boxC, ground1, ball, sling, mouseConstraint])
            wait = wait + 0.1
        }
        if (wait >= 10 && level === 1){

            let ground6=Matter.Bodies.rectangle(930, 420, 250, 15, {
                isStatic: true,
                render: {
                 sprite: {
                texture: "./Assets/ground.png",
                yScale: 0.4 ,
                xScale: 3.7
          }
        }
      });

            boxA = Matter.Bodies.rectangle(900, 359, 25, 100, {collisionFilter: {category:yesballs}, render: {sprite: {texture: ("./Assets/wood.png"),xScale: 0.4,yScale: 0.5}}})
            boxB = Matter.Bodies.rectangle(970, 359, 25, 100, {collisionFilter: {category: yesballs},render: {sprite: {texture: ("./Assets/wood.png"),xScale: 0.4,yScale: 0.5}}})
            boxC = Matter.Bodies.rectangle(970, 309, 175, 25,{collisionFilter:{category: yesballs}, render: {sprite: {texture: ("./Assets/wood90.png"),xScale: 0.8,yScale: 0.4}}})
            boxD = Matter.Bodies.rectangle(1040, 259, 25, 100, {collisionFilter: {category: yesballs},render: {sprite: {texture: ("./Assets/wood.png"),xScale: 0.4,yScale: 0.5}}})
            boxE = Matter.Bodies.rectangle(1040, 359, 25, 100,{collisionFilter:{category: yesballs}, render: {sprite: {texture: ("./Assets/wood.png"),xScale: 0.4,yScale: 0.5}}})
            boxF = Matter.Bodies.rectangle(970, 249, 25, 100, {collisionFilter: {category: yesballs},render: {sprite: {texture: ("./Assets/wood.png"),xScale: 0.4,yScale: 0.5}}})
            boxG = Matter.Bodies.rectangle(1005, 159, 100, 25, {collisionFilter: {category: yesballs},render: {sprite: {texture: ("./Assets/wood90.png"),xScale: 0.45,yScale: 0.4}}})
            Pig1 = Matter.Bodies.rectangle(935,259,45,45,{collisionFilter:{category: yesballs}})
            Pig2 = Matter.Bodies.rectangle(935,399,45,45,{collisionFilter:{category: yesballs}})
            Pig3 = Matter.Bodies.rectangle(1005,299,45,45,{collisionFilter:{category: yesballs}})
            Matter.World.add(engine.world, [ Pig1,Pig2,Pig3,boxA,boxB,boxC,boxD,boxE,boxF,boxG,ground6, ball, sling, mouseConstraint])
            level=2
            wait = 0
        }

        //3. Level
        if (score === 5 && level === 2){
            Matter.World.remove(engine.world, [ Pig1,Pig2,Pig3,boxA,boxB,boxC,boxD,boxE,boxF,boxG,ground1, ball, sling, mouseConstraint])
            Matter.World.remove(engine.world, [ground1])
            wait = wait + 0.1
        }
        if (wait >= 10 && level === 2 ){
            
            
            let ground6= Matter.Bodies.rectangle(930, 420, 250, 15, {
                isStatic: true,
                render: {
                 sprite: {
                texture: "./Assets/ground.png",
                yScale: 0.4 ,
                xScale: 3.7
          }
        }
      });


            boxA = Matter.Bodies.rectangle(900, 359, 25, 100, {collisionFilter: {category:yesballs}, render: {sprite: {texture: ("./Assets/wood.png"),xScale: 0.4,yScale: 0.5}}})
            boxB = Matter.Bodies.rectangle(970, 359, 25, 100, {collisionFilter: {category: yesballs},render: {sprite: {texture: ("./Assets/wood.png"),xScale: 0.4,yScale: 0.5}}})
            boxC = Matter.Bodies.rectangle(970, 309, 175, 25,{collisionFilter:{category: yesballs}, render: {sprite: {texture: ("./Assets/wood90.png"),xScale: 0.8,yScale: 0.4}}})
            boxD = Matter.Bodies.rectangle(1005, 259, 25, 100, {collisionFilter: {category: yesballs},render: {sprite: {texture: ("./Assets/wood.png"),xScale: 0.4,yScale: 0.5}}})
            boxE = Matter.Bodies.rectangle(1040, 359, 25, 100,{collisionFilter:{category: yesballs}, render: {sprite: {texture: ("./Assets/wood.png"),xScale: 0.4,yScale: 0.5}}})
            boxF = Matter.Bodies.rectangle(945, 249, 25, 100, {collisionFilter: {category: yesballs},render: {sprite: {texture: ("./Assets/wood.png"),xScale: 0.4,yScale: 0.5}}})
            boxG = Matter.Bodies.rectangle(975, 159, 100, 25, {collisionFilter: {category: yesballs},render: {sprite: {texture: ("./Assets/wood90.png"),xScale: 0.45,yScale: 0.4}}})
            Pig1 = Matter.Bodies.rectangle(935,399,45,45,{collisionFilter:{category: yesballs}})
            Pig2 = Matter.Bodies.rectangle(1005,399,45,45,{collisionFilter:{category: yesballs}})
            Pig3 = Matter.Bodies.rectangle(970,299,45,45,{collisionFilter:{category: yesballs}})
            Matter.World.add(engine.world, [ Pig1,Pig2,Pig3,boxA,boxB,boxC,boxD,boxE,boxF,boxG,ground6, ball, sling, mouseConstraint])
            level= 3
            wait = 0
    }

    //Level 4

    if (score === 8 && level === 3){
        Matter.World.remove(engine.world, [stack,boxA,boxB,boxC,boxD,boxE,boxF,boxG, ground1, ball, sling, mouseConstraint])
        wait = wait + 0.1
    }
    if (wait >= 10 && level === 3 ){

        let ground6=Matter.Bodies.rectangle(930, 450, 250, 15, {
            isStatic: true,
            render: {
             sprite: {
            texture: "./Assets/ground.png",
            yScale: 0.4 ,
            xScale: 3.7
      }
    }
  });


        boxA = Matter.Bodies.rectangle(900, 359, 25, 100, {collisionFilter: {category:yesballs}, render: {sprite: {texture: ("./Assets/wood.png"),xScale: 0.4,yScale: 0.5}}})
        boxB = Matter.Bodies.rectangle(970, 359, 25, 100, {collisionFilter: {category: yesballs},render: {sprite: {texture: ("./Assets/wood.png"),xScale: 0.4,yScale: 0.5}}})
        boxC = Matter.Bodies.rectangle(970, 309, 175, 25,{collisionFilter:{category: yesballs}, render: {sprite: {texture: ("./Assets/wood90.png"),xScale: 0.8,yScale: 0.4}}})
        boxD = Matter.Bodies.rectangle(1005, 259, 25, 100, {collisionFilter: {category: yesballs},render: {sprite: {texture: ("./Assets/wood.png"),xScale: 0.4,yScale: 0.5}}})
        boxE = Matter.Bodies.rectangle(1040, 359, 25, 100,{collisionFilter:{category: yesballs}, render: {sprite: {texture: ("./Assets/wood.png"),xScale: 0.4,yScale: 0.5}}})
        boxF = Matter.Bodies.rectangle(945, 249, 25, 100, {collisionFilter: {category: yesballs},render: {sprite: {texture: ("./Assets/wood.png"),xScale: 0.4,yScale: 0.5}}})
        boxG = Matter.Bodies.rectangle(975, 159, 100, 25, {collisionFilter: {category: yesballs},render: {sprite: {texture: ("./Assets/wood90.png"),xScale: 0.45,yScale: 0.4}}})
        Pig1 = Matter.Bodies.rectangle(935,399,45,45,{collisionFilter:{category: yesballs}})
        Pig2 = Matter.Bodies.rectangle(1005,399,45,45,{collisionFilter:{category: yesballs}})
        Pig3 = Matter.Bodies.rectangle(970,299,45,45,{collisionFilter:{category: yesballs}})
        Matter.World.add(engine.world, [ Pig1,Pig2,Pig3,boxA,boxB,boxC,boxD,boxE,boxF,boxG,ground6, ball, sling, mouseConstraint])
        level= 4
        wait = 0
    }

    }


        render.mouse = mouse;
        let firing = false;
        Matter.Events.on(mouseConstraint, 'enddrag', function (e) {
            if (e.body === ball) firing = true;
        });
        Matter.Events.on(engine, 'afterUpdate', function () {
            if (firing && Math.abs(ball.position.x - 300) < 20 && Math.abs(ball.position.y - 400) < 20) {
                ball = Matter.Bodies.circle(300, 400, 15, {collisionFilter: {category:yesmouse}})
                Matter.World.add(engine.world, ball);
                sling.bodyB = ball;
                firing = false;
                birds = birds + 1
                document.querySelector( "#birds").innerHTML = birds
            }
        });

        // Shape paramters, '8' for octagon
        let stack = Matter.Composites.stack(-500, 1, 15, 15, 0, 0, function (x, y) {
            return Matter.Bodies.polygon(x, y, 8, 18);
           
        });

        Matter.World.add(engine.world, [boxA,boxB,boxC,Pig1,Pig2,ground5,ground2,ground3, ground4,ground1, ball, sling, mouseConstraint]);
        Matter.Engine.run(engine);
        Matter.Render.run(render);
