"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var promotion_service_1 = require("../services/promotion.service");
var leader_service_1 = require("../services/leader.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var page_1 = require("ui/page");
var gestures_1 = require("ui/gestures");
var enums = require("ui/enums");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dishservice, promotionservice, leaderservice, page, fonticon, baseURL) {
        this.dishservice = dishservice;
        this.promotionservice = promotionservice;
        this.leaderservice = leaderservice;
        this.page = page;
        this.fonticon = fonticon;
        this.baseURL = baseURL;
        this.showLeftCard = true;
        this.showMiddleCard = false;
        this.showRightCard = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getFeaturedDish()
            .subscribe(function (dish) { return _this.dish = dish; }, function (errmess) { return _this.dishErrMess = errmess; });
        this.promotionservice.getFeaturedPromotion()
            .subscribe(function (promotion) { return _this.promotion = promotion; }, function (errmess) { return _this.promoErrMess = errmess; });
        this.leaderservice.getFeaturedLeader()
            .subscribe(function (leader) { return _this.leader = leader; }, function (errmess) { return _this.leaderErrMess = errmess; });
    };
    HomeComponent.prototype.onSwipe = function (args) {
        if (args.direction === gestures_1.SwipeDirection.left) {
            this.animateLeft();
        }
        else if (args.direction === gestures_1.SwipeDirection.right) {
            this.animateRight();
        }
    };
    HomeComponent.prototype.animateLeft = function () {
        var _this = this;
        if (this.dish && this.promotion && this.leader) {
            this.leftCard = this.page.getViewById('leftCard');
            this.middleCard = this.page.getViewById('middleCard');
            this.rightCard = this.page.getViewById('rightCard');
            if (this.showLeftCard) {
                this.rightCard.animate({
                    translate: { x: 2000, y: 0 }
                })
                    .then(function () {
                    _this.leftCard.animate({
                        translate: { x: -2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showLeftCard = false;
                        _this.showMiddleCard = true;
                        _this.middleCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
            else if (this.showMiddleCard) {
                this.leftCard.animate({
                    translate: { x: 2000, y: 0 },
                    duration: 500
                })
                    .then(function () {
                    _this.middleCard.animate({
                        translate: { x: -2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showMiddleCard = false;
                        _this.showRightCard = true;
                        _this.rightCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
            else if (this.showRightCard) {
                this.middleCard.animate({
                    translate: { x: 2000, y: 0 },
                    duration: 500
                })
                    .then(function () {
                    _this.rightCard.animate({
                        translate: { x: -2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showRightCard = false;
                        _this.showLeftCard = true;
                        _this.leftCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500
                        });
                    });
                });
            }
        }
    };
    HomeComponent.prototype.animateRight = function () {
        var _this = this;
        if (this.dish && this.promotion && this.leader) {
            this.leftCard = this.page.getViewById('leftCard');
            this.middleCard = this.page.getViewById('middleCard');
            this.rightCard = this.page.getViewById('rightCard');
            if (this.showLeftCard) {
                this.middleCard.animate({
                    translate: { x: -2000, y: 0 },
                    duration: 500
                })
                    .then(function () {
                    _this.leftCard.animate({
                        translate: { x: 2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showLeftCard = false;
                        _this.showRightCard = true;
                        _this.rightCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
            else if (this.showMiddleCard) {
                this.rightCard.animate({
                    translate: { x: -2000, y: 0 },
                    duration: 500
                })
                    .then(function () {
                    _this.middleCard.animate({
                        translate: { x: 2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showMiddleCard = false;
                        _this.showLeftCard = true;
                        _this.leftCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
            else if (this.showRightCard) {
                this.leftCard.animate({
                    translate: { x: -2000, y: 0 },
                    duration: 500
                })
                    .then(function () {
                    _this.rightCard.animate({
                        translate: { x: 2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showRightCard = false;
                        _this.showMiddleCard = true;
                        _this.middleCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500
                        });
                    });
                });
            }
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            moduleId: module.id,
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __param(5, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            promotion_service_1.PromotionService,
            leader_service_1.LeaderService,
            page_1.Page,
            nativescript_ngx_fonticon_1.TNSFontIconService, Object])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUUxRCx5REFBdUQ7QUFFdkQsbUVBQWlFO0FBRWpFLDZEQUEyRDtBQUUzRCx1RUFBK0Q7QUFDL0QsZ0NBQStCO0FBRS9CLHdDQUFvRTtBQUNwRSxnQ0FBa0M7QUFRbEM7SUFnQkksdUJBQW9CLFdBQXdCLEVBQ2hDLGdCQUFrQyxFQUNsQyxhQUE0QixFQUM1QixJQUFVLEVBQ1YsUUFBNEIsRUFDVCxPQUFPO1FBTGxCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQ1QsWUFBTyxHQUFQLE9BQU8sQ0FBQTtRQVp0QyxpQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxrQkFBYSxHQUFZLEtBQUssQ0FBQztJQVVXLENBQUM7SUFFM0MsZ0NBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUU7YUFDN0IsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLEVBQy9CLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsR0FBUSxPQUFPLEVBQS9CLENBQStCLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUU7YUFDdkMsU0FBUyxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLEVBQTFCLENBQTBCLEVBQzlDLFVBQUEsT0FBTyxJQUFJLE9BQUEs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QUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQztRQXNCTyxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FMVywwQkFBVztZQUNkLG9DQUFnQjtZQUNuQiw4QkFBYTtZQUN0QixXQUFJO1lBQ0EsOENBQWtCO09BcEIvQixhQUFhLENBa016QjtJQUFELG9CQUFDO0NBQUEsQUFsTUQsSUFrTUM7QUFsTVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvbW90aW9uIH0gZnJvbSAnLi4vc2hhcmVkL3Byb21vdGlvbic7XG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcHJvbW90aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGVhZGVyIH0gZnJvbSAnLi4vc2hhcmVkL2xlYWRlcic7XG5pbXBvcnQgeyBMZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGVhZGVyLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSwgU3dpcGVEaXJlY3Rpb24gfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCAqIGFzIGVudW1zIGZyb20gXCJ1aS9lbnVtc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGRpc2g6IERpc2g7XG4gICAgcHJvbW90aW9uOiBQcm9tb3Rpb247XG4gICAgbGVhZGVyOiBMZWFkZXI7XG4gICAgZGlzaEVyck1lc3M6IHN0cmluZztcbiAgICBwcm9tb0Vyck1lc3M6IHN0cmluZztcbiAgICBsZWFkZXJFcnJNZXNzOiBzdHJpbmc7XG5cbiAgICBzaG93TGVmdENhcmQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHNob3dNaWRkbGVDYXJkOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd1JpZ2h0Q2FyZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxlZnRDYXJkOiBWaWV3O1xuICAgIG1pZGRsZUNhcmQ6IFZpZXc7XG4gICAgcmlnaHRDYXJkOiBWaWV3O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkaXNoc2VydmljZTogRGlzaFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcHJvbW90aW9uc2VydmljZTogUHJvbW90aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBsZWFkZXJzZXJ2aWNlOiBMZWFkZXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSxcbiAgICAgICAgQEluamVjdCgnYmFzZVVSTCcpIHByaXZhdGUgYmFzZVVSTCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5kaXNoc2VydmljZS5nZXRGZWF0dXJlZERpc2goKVxuICAgICAgICAgICAgLnN1YnNjcmliZShkaXNoID0+IHRoaXMuZGlzaCA9IGRpc2gsXG4gICAgICAgICAgICAgICAgZXJybWVzcyA9PiB0aGlzLmRpc2hFcnJNZXNzID0gPGFueT5lcnJtZXNzKTtcbiAgICAgICAgdGhpcy5wcm9tb3Rpb25zZXJ2aWNlLmdldEZlYXR1cmVkUHJvbW90aW9uKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocHJvbW90aW9uID0+IHRoaXMucHJvbW90aW9uID0gcHJvbW90aW9uLFxuICAgICAgICAgICAgICAgIGVycm1lc3MgPT4gdGhpcy5wcm9tb0Vyck1lc3MgPSA8YW55PmVycm1lc3MpO1xuICAgICAgICB0aGlzLmxlYWRlcnNlcnZpY2UuZ2V0RmVhdHVyZWRMZWFkZXIoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShsZWFkZXIgPT4gdGhpcy5sZWFkZXIgPSBsZWFkZXIsXG4gICAgICAgICAgICAgICAgZXJybWVzcyA9PiB0aGlzLmxlYWRlckVyck1lc3MgPSA8YW55PmVycm1lc3MpO1xuICAgIH1cblxuICAgIG9uU3dpcGUoYXJnczogU3dpcGVHZXN0dXJlRXZlbnREYXRhKSB7XG5cbiAgICAgICAgaWYgKGFyZ3MuZGlyZWN0aW9uID09PSBTd2lwZURpcmVjdGlvbi5sZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVMZWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXJncy5kaXJlY3Rpb24gPT09IFN3aXBlRGlyZWN0aW9uLnJpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVSaWdodCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZUxlZnQoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzaCAmJiB0aGlzLnByb21vdGlvbiAmJiB0aGlzLmxlYWRlcikge1xuICAgICAgICAgICAgdGhpcy5sZWZ0Q2FyZCA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PignbGVmdENhcmQnKTtcbiAgICAgICAgICAgIHRoaXMubWlkZGxlQ2FyZCA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PignbWlkZGxlQ2FyZCcpO1xuICAgICAgICAgICAgdGhpcy5yaWdodENhcmQgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oJ3JpZ2h0Q2FyZCcpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93TGVmdENhcmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q2FyZC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDIwMDAsIHk6IDAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdENhcmQuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IC0yMDAwLCB5OiAwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TGVmdENhcmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TWlkZGxlQ2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWlkZGxlQ2FyZC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNob3dNaWRkbGVDYXJkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q2FyZC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDIwMDAsIHk6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWlkZGxlQ2FyZC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogLTIwMDAsIHk6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNaWRkbGVDYXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1JpZ2h0Q2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDYXJkLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2hvd1JpZ2h0Q2FyZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWlkZGxlQ2FyZC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDIwMDAsIHk6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDYXJkLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAtMjAwMCwgeTogMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1JpZ2h0Q2FyZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dMZWZ0Q2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdENhcmQuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmltYXRlUmlnaHQoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzaCAmJiB0aGlzLnByb21vdGlvbiAmJiB0aGlzLmxlYWRlcikge1xuICAgICAgICAgICAgdGhpcy5sZWZ0Q2FyZCA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PignbGVmdENhcmQnKTtcbiAgICAgICAgICAgIHRoaXMubWlkZGxlQ2FyZCA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PignbWlkZGxlQ2FyZCcpO1xuICAgICAgICAgICAgdGhpcy5yaWdodENhcmQgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oJ3JpZ2h0Q2FyZCcpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93TGVmdENhcmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1pZGRsZUNhcmQuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAtMjAwMCwgeTogMCB9LFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q2FyZC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMjAwMCwgeTogMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xlZnRDYXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1JpZ2h0Q2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDYXJkLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2hvd01pZGRsZUNhcmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q2FyZC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IC0yMDAwLCB5OiAwIH0sXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1pZGRsZUNhcmQuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDIwMDAsIHk6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNaWRkbGVDYXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xlZnRDYXJkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q2FyZC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNob3dSaWdodENhcmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRDYXJkLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogLTIwMDAsIHk6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDYXJkLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAyMDAwLCB5OiAwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmlnaHRDYXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01pZGRsZUNhcmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1pZGRsZUNhcmQuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=