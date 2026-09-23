import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-promise-examples',
  imports: [],
  templateUrl: './rxjs-promise-examples.html',
  styleUrl: './rxjs-promise-examples.css',
})
export class RxjsPromiseExamples implements OnInit, OnDestroy {
  private mySub!: Subscription;
  ngOnInit(): void {
    //promise examples
    // ways of creating a Promise
    // manual creation without using it
    // using it with .then()
    // promise.then() is a sucessfull promise while promise.cathch() is a rejected promise
    // 🔥 Real-life meaning

    // Imagine:

    // You order food 🍔
    // Something goes wrong ❌

    // .catch() = “refund / apology system”

    const promise = new Promise((resolve, reject) => {
      resolve('sucess');
    });
    // "I am creating an async operation."
    promise.then((data) => {
      console.log(data);
    });

    console.log('I get executed before promise');

    // SUPER SIMPLE ANALOGY

    // Imagine ordering food.

    // new Promise()

    // You place the order.

    // Food is being prepared
    // .then()

    // You say:

    // "When the food is ready, call me."

    // using shortcut without the newPromise statement
    // Instead of writing:

    // new Promise((resolve, reject) => {
    //   resolve("Hello");
    // });

    const resolvedPromise = Promise.resolve('Hello');
    const rejectedPromise = Promise.reject('Hello Reject');
    resolvedPromise.then((data) => {
      console.log(data);
    });

    rejectedPromise.catch((err) => {
      console.log(err);
    });

    //FULL Beginner Example

    const loginPromise = new Promise((resolve, reject) => {
      const passwordCorrect = false;
      if (passwordCorrect) {
        resolve('login success');
      } else {
        reject('wrong password');
      }
    });

    loginPromise
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });

    // Real Purpose of Promises

    // Promises are mainly for:

    // Real Thing	Example
    // API requests	fetch()
    // Database queries	Prisma/Mongoose
    // Payments	Stripe/Flutterwave
    // File uploads	Cloudinary
    // Authentication	login/register
    // Delays	setTimeout wrappers

    // 🧠 What is .finally()?

    // .finally() runs after a promise settles, no matter what happened.

    // “Settles” means:

    // ✔ resolved (success)
    // ❌ rejected (error)

    // So:

    // Promise ends → .finally() runs

    const promisee = new Promise((resolve, reject) => {
      resolve('sucess');
    });

    promisee
      .then((data) => {
        console.log(data);
      })
      .finally(() => {
        console.log('I just finished running sucess');
      });
    Promise.resolve('I am resolved promise')
      .then((data) => console.log(data))
      .finally(() => {
        console.log('I just finished running promise resolve');
      });

    Promise.reject('I am a rejected promise')
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('I just finished running promise reject');
      });

    //promise vs observable

    //promise object
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Promise object call 1');
      }, 1000);
    });

    myPromise.then((result) => {
      console.log(result);
    });

    //observable obeject
    const observable = new Observable((resolve) => {
      setTimeout(() => {
        resolve.next('Observable object call 1');
        //observable are multicast

        resolve.next('Observable object call 2 ');
        resolve.next('Observable object call 3 ');
        resolve.next('Observable object call 4 ');
      }, 1000);
    });

    // this.mySub = observable.subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     console.log('I just fininished executing my resolve');
    //   },
    // });

    // operators demo
    //filter operator
    this.mySub = observable.pipe(filter((res) => res === 'Observable object call 1')).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('I just fininished executing my resolve');
      },
    });
    //map operator
    this.mySub = observable
      .pipe(
        filter((res) => res === 'Observable object call 1'),
        map((res) => 'Rxjs ' + res),
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('I just fininished executing my resolve');
        },
      });
  }
  ngOnDestroy(): void {
    console.log('ondestory called');

    this.mySub.unsubscribe();
  }
}
