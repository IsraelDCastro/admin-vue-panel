<template>
  <div class="mb-8 ratings">
    <div class="rate from-primary-500 to-primary-600 ">
      <div class="rate-info">
        <h5 class="mb-4">New Users today</h5>
        <h3>25 <small><a href="#!" class="btn btn-outline-white is-small">See all</a></small></h3>
      </div>
      <div class="rate-img">
        <img src="/images/new-users.png" alt="" />
      </div>
    </div>
    <div class="rate from-orange-500 to-orange-600">
      <div class="rate-info">
        <h5 class="mb-4">New suggetions today</h5>
        <h3>10 <small><a href="#!" class="btn btn-outline-white is-small">See all</a></small></h3>
      </div>
      <div class="rate-img">
        <img src="/images/suggetions.png" alt="" />
      </div>
    </div>
    <div class="rate from-green-500 to-green-600">
      <div class="rate-info">
        <h5 class="mb-4">Earnings today</h5>
        <h3>1,400 <span class="text-sm">usd$</span></h3>
      </div>
      <div class="rate-img">
        <img src="/images/profits.png" alt="" />
      </div>
    </div>
  </div>
  <div class="flex chart-graphics max-md:flex-wrap">
    <div class="w-full card max-md:mb-8 tablet:w-1/2 tablet:mr-2">
      <h4 class="mb-4 font-semibold">New users per week</h4>
      <!-- <NewUsers /> -->
    </div>
    <div class="w-full card tablet:w-1/2 tablet:ml-2">
      <h4 class="mb-4 font-semibold">New users per week</h4>
      <!-- <ProfitsChart /> -->
    </div>
  </div>
</template>