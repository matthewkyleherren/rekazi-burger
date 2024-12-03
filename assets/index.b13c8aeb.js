import {
    F as T,
    D as A,
    P as B,
    L as D,
    a as N,
    A as L,
    S as q,
    T as R,
    b as j,
    c as J,
    d as V,
    e as E,
    f as H,
    C as Q,
    V as U,
    g as Z,
    h as W,
    i as Y,
    j as G,
    k as K,
    l as X,
    m as ee,
    I as ie,
    n as te,
    R as ae,
    o as se,
    p as re,
    q as le,
    r as ne,
    G as oe,
    s as ce,
    t as de,
    u as pe,
    v as ue,
    w as me,
    x as ge,
    y as ve,
    M as fe,
    z as he,
    B as be,
    E as ye,
    N as ke,
    H as we,
    J as Ce,
    K as Ie,
    O as Se,
    Q as $e,
    U as xe,
    W as ze,
    $ as e,
    X as Fe
} from "./vendor.a52aea14.js";
const Te = function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
    new MutationObserver(s => {
        for (const l of s)
            if (l.type === "childList")
                for (const o of l.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function a(s) {
        const l = {};
        return s.integrity && (l.integrity = s.integrity), s.referrerpolicy && (l.referrerPolicy = s.referrerpolicy), s.crossorigin === "use-credentials" ? l.credentials = "include" : s.crossorigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l
    }

    function r(s) {
        if (s.ep) return;
        s.ep = !0;
        const l = a(s);
        fetch(s.href, l)
    }
};
Te();
T.use([A, B, D, N, L, q, R, j, J, V, E, H, Q, U, Z, W, Y, G, K, X, ee, ie, te, ae, se, re, le, ne, oe, ce, de, pe, ue, me, ge, ve, fe, he, be, ye, ke, we, Ce, Ie, Se, $e, xe, ze]);

function w(i) {
    return () => e("div", {
        class: `block item-cards ${i.scrollable?"item-cards-scrollable":""}`
    }, e("slot", null))
}
const S = i => {
    if (i = String(i), i.split(".")[1] && i.split(".")[1].length !== 2) {
        let t = i.split(".")[1].slice(0, 2);
        t.length === 1 && (t = `${t}0`), i = `${i.split(".")[0]}.${t}`
    } else i.split(".")[1] || (i = `${i}.00`);
    return i
};

function C(i) {
    return () => e("a", {
        href: `/item/${i.item.id}/`,
        class: "item-card"
    }, e("img", {
        class: "item-card-image",
        src: i.item.image
    }), e("div", {
        class: "item-card-content"
    }, e("div", {
        class: "item-card-title"
    }, i.item.title), i.item.subtitle && e("div", {
        class: "item-card-subtitle"
    }, i.item.subtitle), e("div", {
        class: "item-card-price"
    }, e("span", null, "$"), S(i.item.prices ? i.item.prices[0].value : i.item.price))))
}

function Pe(i, t) {
    const {
        $store: a
    } = t, {
        categories: r,
        filterCategoryId: s
    } = a.getters, l = o => {
        s.value === o ? a.dispatch("setFilterCategoryId", null) : a.dispatch("setFilterCategoryId", o)
    };
    return () => e("div", {
        class: "block categories-filter"
    }, r.value.map(o => e("a", {
        href: "#",
        class: `link ${s.value===o.id?"category-active":""}`,
        onClick: () => l(o.id)
    }, e("img", {
        src: o.image
    }), e("span", null, o.title))))
}

function _e() {
    return () => e("div", {
        class: "block home-slider"
    }, e("a", {
        href: "/item/1/",
        class: "home-slider-slide"
    }, e("img", {
        src: "images/slide-1.jpg"
    })), e("a", {
        href: "/item/15/",
        class: "home-slider-slide"
    }, e("img", {
        src: "images/slide-2.jpg"
    })), e("a", {
        href: "/item/10/",
        class: "home-slider-slide"
    }, e("img", {
        src: "images/slide-3.jpg"
    })))
}
var Me = (i, t) => {
        const {
            $store: a,
            $ref: r,
            $onMounted: s,
            $onBeforeUnmount: l,
            $f7: o
        } = t, {
            filterCategoryId: u,
            filteredItems: f,
            recentItems: g,
            searchState: h,
            searchResults: c,
            popularItems: m,
            trendingItems: b
        } = a.getters;
        let k;
        const v = r(!1),
            n = () => {
                k = o.searchbar.create({
                    el: ".page-home .searchbar",
                    customSearch: !0,
                    backdrop: !1,
                    on: {
                        enable() {
                            v.value = !0
                        },
                        disable() {
                            v.value = !1
                        },
                        search(d, $) {
                            a.dispatch("search", $)
                        }
                    }
                })
            },
            y = () => {
                k.destroy()
            };
        return s(() => {
            n()
        }), l(() => {
            y()
        }), () => e("div", {
            class: "page page-home"
        }, e("div", {
            class: "navbar navbar-transparent"
        }, e("div", {
            class: "navbar-bg"
        }), e("div", {
            class: "navbar-inner sliding"
        }, e("div", {
            class: "title"
        }, "Seven Burger"))), e("div", {
            class: "page-content"
        }, e("div", {
            class: "page-title"
        }, "Seven Burger"), e("form", {
            class: "searchbar"
        }, e("div", {
            class: "searchbar-inner"
        }, e("div", {
            class: "searchbar-input-wrap"
        }, e("input", {
            type: "search",
            placeholder: "Search"
        }), e("i", {
            class: "searchbar-icon"
        }), e("span", {
            class: "input-clear-button"
        })), e("span", {
            class: "searchbar-disable-button"
        }, "Cancel"))), v.value && h.value === "empty" && e("div", {
            class: "block"
        }, "Sorry, we have found no items"), v && c.value.length > 0 && e(w, {
            key: "search-results"
        }, c.value.map(d => e(C, {
            key: d.id,
            item: d
        }))), !v.value && e("Fragment", null, e(_e, null), e("div", {
            class: "block-title block-title-medium"
        }, "Categories"), e(Pe, null), u.value === null && e("Fragment", null, e("div", {
            class: "block-title block-title-medium"
        }, "Popular Now"), e(w, {
            key: "popular-items",
            scrollable: !0
        }, m.value.map(d => e(C, {
            key: d.id,
            item: d
        }))), e("div", {
            class: "block-title block-title-medium"
        }, "Top of the week"), e(w, {
            key: "top-items",
            scrollable: !0
        }, b.value.map(d => e(C, {
            key: d.id,
            item: d
        }))), e("div", {
            class: "block-title block-title-medium"
        }, "Recently viewed"), g.value.length ? e(w, {
            key: "recent-items",
            scrollable: !0
        }, g.value.map(d => e(C, {
            key: d.id,
            item: d
        }))) : e("div", {
            class: "block"
        }, e("p", null, "You didn't check any items yet. Last few items you viewed will appear here."))), u.value !== null && e("Fragment", null, e(w, {
            key: "filtered-items",
            scrollable: !1
        }, f.value.map(d => e(C, {
            key: d.id,
            item: d
        })))))))
    },
    Oe = (i, t) => {
        const {
            $store: a
        } = t, {
            favoriteItems: r
        } = a.getters;
        return () => e("div", {
            class: "page"
        }, e("div", {
            class: "navbar navbar-transparent"
        }, e("div", {
            class: "navbar-bg"
        }), e("div", {
            class: "navbar-inner sliding"
        }, e("div", {
            class: "title"
        }, "Favorites"))), e("div", {
            class: "page-content"
        }, e("div", {
            class: "page-title"
        }, "Favorites"), r.value.length > 0 ? e(w, null, r.value.map(s => e(C, {
            key: s.id,
            item: s
        }))) : e("div", {
            class: "block"
        }, e("p", null, e("b", null, "You don't have any favorites yet")), e("p", null, "When viewing an item, press the favorite icon", " ", e("i", {
            class: "icon f7-icons ios-only text-color-primary"
        }, "heart"), e("i", {
            class: "icon material-icons md-only text-color-primary"
        }, "favorite_border"), " ", "to add it"))))
    };
var Ae = (i, t) => {
    const {
        $store: a,
        $ref: r,
        $f7: s,
        $el: l
    } = t, {
        cart: o,
        cartTotal: u
    } = a.getters;
    let f = "",
        g = "",
        h = "";
    const c = r("card"),
        m = r(!1),
        b = n => {
            c.value = n
        },
        k = () => {
            !s.input.validateInputs(l.value.find("form")) || (console.log({
                name: f,
                address: g,
                tel: h,
                payment: c,
                cart: [...o.value]
            }), a.dispatch("emptyCart"), m.value = !0, requestAnimationFrame(() => {
                l.value.find(".page-content").trigger("scroll")
            }))
        },
        v = (n, y) => {
            const d = n.detail;
            a.dispatch("updateCartQuantity", {
                quantity: d,
                obj: y
            })
        };
    return () => e("div", {
        class: "page cart-page"
    }, e("div", {
        class: "navbar navbar-transparent"
    }, e("div", {
        class: "navbar-bg"
    }), e("div", {
        class: "navbar-inner sliding"
    }, e("div", {
        class: "title"
    }, "Cart"))), o.value.length > 0 && e("div", {
        class: "fab fab-extended fab-center-bottom"
    }, e("a", {
        key: "add-to-cart",
        href: "#",
        onClick: k
    }, e("span", {
        class: "fab-text"
    }, e("span", null, c.value === "delivery" ? "Place Order" : "Make Payment"), e("span", null, "$", u.value)))), e("div", {
        class: "page-content"
    }, m.value && o.value.length === 0 ? e("Fragment", null, e("div", {
        class: "block cart-order-success"
    }, e("p", null, e("i", {
        class: "icon f7-icons"
    }, "checkmark_circle_fill")), e("h1", null, e("b", null, "Thank you!")), e("p", null, "We are currently processing your order and will make delivery as soon as possible"))) : o.value.length === 0 ? e("Fragment", null, e("div", {
        class: "page-title"
    }, "Cart"), e("div", {
        class: "block"
    }, "Your cart is empty.")) : e("Fragment", null, e("div", {
        class: "page-title"
    }, "Cart"), e("div", {
        class: "list cart-list inset-md medium-inset-ios list-strong list-dividers"
    }, e("ul", null, o.value.map((n, y) => e("li", {
        key: `${n.item.id}-${y}`,
        class: "item-content"
    }, e("div", {
        class: "item-media"
    }, e("img", {
        src: n.item.image
    })), e("div", {
        class: "item-inner"
    }, e("div", {
        class: "item-title"
    }, e("div", {
        class: "cart-list-item-title"
    }, n.item.title, n.priceTitle ? ` (${n.priceTitle})` : ""), e("div", {
        class: "cart-list-item-price"
    }, "$", n.price)), e("div", {
        class: "item-after"
    }, e("div", null, e("div", {
        class: "stepper stepper-small stepper-fill stepper-round stepper-init",
        "data-min": "0",
        "data-max": "10",
        "data-value": n.quantity,
        onStepperChange: d => v(d, n)
    }, e("div", {
        class: "stepper-button-minus"
    }), e("div", {
        class: "stepper-value"
    }, n.quantity), e("div", {
        class: "stepper-button-plus"
    }))), e("div", {
        class: "cart-list-item-total"
    }, "$", S(n.price * n.quantity)))))))), e("div", {
        class: "block-title block-title-medium"
    }, "Delivery"), e("form", {
        class: "list inset-ios medium-inset-md cart-inputs-list"
    }, e("ul", null, e("li", {
        class: "item-content item-input"
    }, e("div", {
        class: "item-inner"
    }, e("div", {
        class: "item-title item-label"
    }, "Name"), e("div", {
        class: "item-input-wrap"
    }, e("input", {
        type: "text",
        name: "name",
        placeholder: "Your full name",
        required: !0,
        onInput: n => {
            f = n.target.value
        }
    })))), e("li", {
        class: "item-content item-input"
    }, e("div", {
        class: "item-inner"
    }, e("div", {
        class: "item-title item-label"
    }, "Delivery address"), e("div", {
        class: "item-input-wrap"
    }, e("input", {
        type: "text",
        name: "address",
        placeholder: "Delivery address",
        required: !0,
        onInput: n => {
            g = n.target.value
        }
    })))), e("li", {
        class: "item-content item-input"
    }, e("div", {
        class: "item-inner"
    }, e("div", {
        class: "item-title item-label"
    }, "Phone number"), e("div", {
        class: "item-input-wrap"
    }, e("input", {
        type: "tel",
        name: "tel",
        placeholder: "Phone number",
        required: !0,
        onInput: n => {
            h = n.target.value
        }
    })))))), e("div", {
        class: "block-title block-title-medium"
    }, "Payment"), e("div", {
        class: "list cart-payment-list inset"
    }, e("ul", null, e("li", null, e("label", {
        class: `item-radio item-radio-icon-start item-content ${c.value==="card"?"cart-payment-list-checked":""}`
    }, e("input", {
        type: "radio",
        name: "payment",
        value: "card",
        checked: !0,
        onChange: n => {
            b(n.target.value)
        }
    }), e("i", {
        class: "icon icon-radio"
    }), e("div", {
        class: "item-media"
    }, e("i", {
        class: "icon f7-icons ios-only"
    }, "creditcard_fill"), e("i", {
        class: "icon material-icons md-only"
    }, "credit_card")), e("div", {
        class: "item-inner"
    }, e("div", {
        class: "item-title"
    }, "Credit Card")))), e("li", null, e("label", {
        class: `item-radio item-radio-icon-start item-content ${c.value==="apple"?"cart-payment-list-checked":""}`
    }, e("input", {
        type: "radio",
        name: "payment",
        value: "apple",
        onChange: n => {
            b(n.target.value)
        }
    }), e("i", {
        class: "icon icon-radio"
    }), e("div", {
        class: "item-media"
    }, e("i", {
        class: "icon f7-icons"
    }, "logo_apple")), e("div", {
        class: "item-inner"
    }, e("div", {
        class: "item-title"
    }, "Apple Pay")))), e("li", null, e("label", {
        class: `item-radio item-radio-icon-start item-content ${c.value==="delivery"?"cart-payment-list-checked":""}`
    }, e("input", {
        type: "radio",
        name: "payment",
        value: "delivery",
        onChange: n => {
            b(n.target.value)
        }
    }), e("i", {
        class: "icon icon-radio"
    }), e("div", {
        class: "item-media"
    }, e("i", {
        class: "icon f7-icons ios-only"
    }, "shippingbox_fill"), e("i", {
        class: "icon material-icons md-only"
    }, "local_shipping")), e("div", {
        class: "item-inner"
    }, e("div", {
        class: "item-title"
    }, "Pay on Delivery")))))))))
};
var Be = (i, t) => {
    const a = parseInt(i.id, 10),
        {
            $store: r,
            $f7: s,
            $onMounted: l,
            $onBeforeUnmount: o,
            $ref: u
        } = t,
        {
            items: f,
            favoriteItems: g,
            cart: h
        } = r.getters,
        c = f.value.filter(p => p.id === a)[0],
        m = u(c.prices ? c.prices[0].value : c.price),
        b = u(c.prices ? c.prices[0].title : ""),
        k = u(1),
        v = p => {
            m.value = p.value, b.value = p.title
        },
        n = () => g.value.filter(p => p.id === c.id)[0],
        y = () => h.value.filter(p => p.item.id === c.id && p.price === m.value)[0],
        d = (p, x) => {
            s.toast.create({
                text: p,
                destroyOnClose: !0,
                closeTimeout: 1e3,
                horizontalPosition: "center",
                position: "center",
                icon: x
            }).open()
        },
        $ = () => {
            n() ? (r.dispatch("removeFavoriteItem", c), d(`${c.title} removed from favorites`, s.theme.ios ? '<i class="icon f7-icons">heart_slash_fill</i>' : '<i class="icon material-icons">favorite_border</i>')) : (r.dispatch("addFavoriteItem", c), d(`${c.title} added to favorites`, s.theme.ios ? '<i class="icon f7-icons">heart</i>' : '<i class="icon material-icons">favorite</i>'))
        };
    let I;
    const _ = () => {
            I = s.stepper.create({
                el: ".item-page-quantity .stepper",
                min: 1,
                max: 10,
                value: 1,
                on: {
                    change(p, x) {
                        k.value = x
                    }
                }
            })
        },
        M = () => {
            I && I.destroy()
        };
    l(() => {
        _(), r.dispatch("addRecentItem", c)
    }), o(() => {
        M()
    });
    const O = () => {
        r.dispatch("addToCart", {
            item: c,
            quantity: I.value,
            price: m.value,
            priceTitle: b.value
        }), d(`${c.title} added to cart`, s.theme.ios ? '<i class="icon f7-icons">cart_fill</i>' : '<i class="icon material-icons">shopping_cart</i>')
    };
    return () => e("div", {
        class: "page item-page"
    }, e("div", {
        class: "navbar navbar-transparent"
    }, e("div", {
        class: "navbar-bg"
    }), e("div", {
        class: "navbar-inner sliding"
    }, e("div", {
        class: "left"
    }, e("a", {
        href: "#",
        class: "link back"
    }, e("i", {
        class: "icon icon-back"
    }), e("span", {
        class: "if-ios"
    }, "Back"))), e("div", {
        class: "title"
    }, c.title), e("div", {
        class: "right"
    }, e("a", {
        href: "#",
        class: "link",
        onClick: $
    }, e("i", {
        class: "icon f7-icons ios-only"
    }, n() ? "heart_slash_fill" : "heart"), e("i", {
        class: "icon material-icons md-only"
    }, n() ? "favorite" : "favorite_border"))))), e("div", {
        class: "fab fab-extended fab-center-bottom"
    }, e("a", {
        key: "add-to-cart",
        href: "#",
        onClick: O
    }, e("i", {
        class: "icon f7-icons if-ios"
    }, "cart_fill", y() && e("i", {
        class: "icon f7-icons"
    }, "checkmark_circle_fill")), e("i", {
        class: "icon material-icons if-md"
    }, "shopping_cart", y() && e("i", {
        class: "icon material-icons"
    }, "check_circle")), e("span", {
        class: "fab-text"
    }, "Add To Cart"))), e("div", {
        class: "page-content"
    }, e("div", {
        class: "page-title item-page-title"
    }, c.title), e("div", {
        class: "item-page-subtitle"
    }, c.subtitle), e("div", {
        class: "block item-page-image no-margin"
    }, e("img", {
        src: c.image
    })), e("div", {
        class: "block no-margin"
    }, c.prices && e("div", {
        class: "item-page-segmented segmented segmented-strong segmented-round"
    }, c.prices.map(p => e("button", {
        type: "button",
        class: `button button-round ${p.value===m.value?"button-active":""}`,
        onClick: () => {
            v(p)
        }
    }, p.title)), e("span", {
        class: "segmented-highlight"
    })), e("div", {
        class: "item-page-quantity"
    }, e("div", {
        class: "stepper stepper-round stepper-fill"
    }, e("div", {
        class: "stepper-button-minus"
    }), e("div", {
        class: "stepper-value"
    }), e("div", {
        class: "stepper-button-plus"
    }))), e("div", {
        class: "item-page-price"
    }, e("span", null, "$"), S(m.value * k.value))), c.description && e("div", {
        class: "block item-page-description"
    }, c.description)))
};
const De = [{
        path: "/",
        component: Me
    }, {
        path: "/item/:id/",
        component: Be
    }, {
        path: "/favorites/",
        component: Oe
    }, {
        path: "/cart/",
        component: Ae
    }],
    Ne = [{
        id: 1,
        title: "Burger",
        image: "images/burgers/bigmac.png"
    }, {
        id: 2,
        title: "Pizza",
        image: "images/pizza/mix.png"
    }, {
        id: 3,
        title: "Desserts",
        image: "images/desserts/chocolate-donut.png"
    }, {
        id: 4,
        title: "Drinks",
        image: "images/drinks/pepsi.png"
    }],
    z = [{
        id: 1,
        title: "Diablo",
        subtitle: "Spicy chorizo with hot jalapeno peppers",
        description: "Spicy chorizo , hot jalapeno peppers , barbecue sauce , mithballs , tomatoes , sweet peppers , red onions , mozzarella , tomato sauce",
        categoryId: 2,
        image: "images/pizza/diablo.png",
        prices: [{
            title: "20 cm",
            value: 6.5
        }, {
            title: "30 cm",
            value: 10.25
        }, {
            title: "40 cm",
            value: 13
        }]
    }, {
        id: 2,
        title: "Margherita",
        subtitle: "Mozzarella & tomatoes",
        description: "Enlarged portion of mozzarella, tomatoes, Italian herbs, tomato sauce",
        categoryId: 2,
        image: "images/pizza/margherita.png",
        prices: [{
            title: "20 cm",
            value: 4.45
        }, {
            title: "30 cm",
            value: 6.17
        }, {
            title: "40 cm",
            value: 10.21
        }]
    }, {
        id: 3,
        title: "Mix",
        subtitle: "Bacon, chicken, ham",
        description: "Bacon, chicken, ham, blue cheese, cheddar and parmesan cheeses, pesto sauce, cubes of brynza, tomatoes, red onions, mozzarella, alfredo sauce, garlic, Italian herbs",
        categoryId: 2,
        image: "images/pizza/mix.png",
        prices: [{
            title: "20 cm",
            value: 6.59
        }, {
            title: "30 cm",
            value: 9.99
        }, {
            title: "40 cm",
            value: 15
        }]
    }, {
        id: 4,
        title: "Pepperoni",
        subtitle: "Spicy pepperoni with extra mozzarella",
        description: "Spicy pepperoni, extra mozzarella, tomatoes, tomato sauce",
        categoryId: 2,
        image: "images/pizza/pepperoni.png",
        prices: [{
            title: "20 cm",
            value: 6.25
        }, {
            title: "30 cm",
            value: 10.5
        }, {
            title: "40 cm",
            value: 13
        }]
    }, {
        id: 5,
        title: "Pepsi",
        subtitle: "A great taste of legendary classics",
        categoryId: 4,
        image: "images/drinks/pepsi.png",
        price: 1.25
    }, {
        id: 6,
        title: "Mirinda",
        subtitle: "Intensely fruity taste",
        categoryId: 4,
        image: "images/drinks/mirinda.png",
        price: 1.25
    }, {
        id: 7,
        title: "7UP",
        subtitle: "7 UP. It's An Up Thing",
        categoryId: 4,
        image: "images/drinks/7up.png",
        price: 1.25
    }, {
        id: 8,
        title: "Aqua Minerale",
        subtitle: "Sparkling water",
        categoryId: 4,
        image: "images/drinks/aqua.png",
        price: 1.25
    }, {
        id: 9,
        title: "Apple Pie",
        subtitle: "100% American-grown apples",
        categoryId: 3,
        image: "images/desserts/apple-pie.png",
        price: 1.99,
        description: "Apple Pie recipe features 100% American-grown apples, and a lattice crust baked to perfection and topped with sprinkled sugar"
    }, {
        id: 10,
        title: "Chocolate Donut",
        subtitle: "Chocolate and cream filling",
        categoryId: 3,
        image: "images/desserts/chocolate-donut.png",
        price: .99,
        description: "Tender donut with chocolate and cream filling, covered with milk and chocolate frosting."
    }, {
        id: 11,
        title: "Cinnamon Bun",
        subtitle: "Cream cheese icing",
        categoryId: 3,
        image: "images/desserts/cinnamon-bun.png",
        price: 1.99,
        description: "Cinnamon bun is served warm and loaded with cinnamon layered between buttery, flaky pastry dough that is drizzled with a delicious cream cheese icing"
    }, {
        id: 12,
        title: "Raspberry Pie",
        subtitle: "Hot puff pie",
        categoryId: 3,
        image: "images/desserts/raspberry-pie.png",
        price: 1.99,
        description: "Hot puff pie with crispy crust and blueberry, raspberry, blackberry, strawberry and currant filling"
    }, {
        id: 13,
        title: "Vanilla Donut",
        subtitle: "Vanilla cream filling",
        categoryId: 3,
        image: "images/desserts/vanilla-donut.png",
        price: .99,
        description: "Aromatic donut with a delicate vanilla cream filling, covered in white and chocolate frosting."
    }, {
        id: 14,
        title: "Big Tasty",
        subtitle: "100% fresh beef burger",
        categoryId: 1,
        image: "images/burgers/big-tasty.png",
        price: 3.99,
        description: "100% fresh beef burger patties that are hot, deliciously juicy and cooked when you order. Our beef patties are seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty cheese on a sesame seed bun. It contains no artificial flavors, preservatives or added colors from artificial sources"
    }, {
        id: 15,
        title: "Big Mac Bacon",
        subtitle: "Classic with bacon",
        categoryId: 1,
        image: "images/burgers/bigmac-bacon.png",
        price: 2.99,
        description: "Mouthwatering perfection starts with two 100% pure beef patties and Big Mac sauce sandwiched between a sesame seed bun. It\u2019s topped off with pickles, crisp shredded lettuce, finely chopped onion and American cheese for a 100% beef burger with a taste like no other. It contains no artificial flavors, preservatives or added colors from artificial sources."
    }, {
        id: 16,
        title: "Big Mac",
        subtitle: "Mouthwatering perfection",
        categoryId: 1,
        image: "images/burgers/bigmac.png",
        price: 2.49,
        description: "Mouthwatering perfection starts with two 100% pure beef patties and Big Mac sauce sandwiched between a sesame seed bun. It\u2019s topped off with pickles, crisp shredded lettuce, finely chopped onion and American cheese for a 100% beef burger with a taste like no other. It contains no artificial flavors, preservatives or added colors from artificial sources."
    }, {
        id: 17,
        title: "Cheeseburger",
        subtitle: "Our simple, classic cheeseburger",
        categoryId: 1,
        image: "images/burgers/cheeseburger.png",
        price: .99,
        description: "Our simple, classic cheeseburger begins with a 100% pure beef burger seasoned with just a pinch of salt and pepper. The Cheeseburger is topped with a tangy pickle, chopped onions, ketchup, mustard, and a slice of melty American cheese. It contains no artificial flavors, preservatives or added colors from artificial sources"
    }, {
        id: 18,
        title: "Chicken Premier",
        subtitle: "Southern style fried chicken",
        categoryId: 1,
        image: "images/burgers/chicken-premier.png",
        price: 2.15,
        description: "Southern style fried chicken sandwich that's crispy, juicy and tender perfection. It\u2019s topped with crinkle-cut pickles and served on a toasted, buttered potato roll"
    }, {
        id: 19,
        title: "Chickenburger",
        subtitle: "Classic for a reason",
        categoryId: 1,
        image: "images/burgers/chickenburger.png",
        price: 2.15,
        description: "It\u2019s a classic for a reason. Savor the satisfying crunch of our juicy chicken patty, topped with shredded lettuce and just the right amount of creamy mayonnaise, all served on a perfectly toasted bun."
    }, {
        id: 20,
        title: "Double Cheeseburger",
        subtitle: "Double the classic",
        categoryId: 1,
        image: "images/burgers/double-cheeseburger.png",
        price: 1.99,
        description: "The Double Cheeseburger features two 100% pure beef burger patties seasoned with just a pinch of salt and pepper. It's topped with tangy pickles, chopped onions, ketchup, mustard and two slices of melty American cheese. There are 450 calories in a Double Cheeseburger. It contains no artificial flavors, preservatives or added colors from artificial sources"
    }, {
        id: 21,
        title: "Filet-O-Fish",
        subtitle: "Wild-caught Filet-O-Fish",
        categoryId: 1,
        image: "images/burgers/filet-o-fish.png",
        price: 2.45,
        description: "Dive into our wild-caught Filet-O-Fish! This fish sandwich has fish sourced from sustainably managed fisheries, on melty American cheese and topped with creamy tartar sauce, all served on a soft, steamed bun"
    }],
    F = (i, t) => localStorage[i] ? JSON.parse(localStorage[i]) : t;
let P;
const Le = [14, 15, 1, 10, 9, 3],
    qe = [3, 4, 5, 19, 11, 20],
    Re = Fe({
        state: {
            items: z,
            categories: Ne,
            filterCategoryId: null,
            favoriteItems: F("favoriteItems", []),
            recentItems: F("recentItems", []),
            searchQuery: "",
            searchState: "idle",
            searchResults: [],
            cart: F("cart", []),
            popularItems: z.filter(i => Le.includes(i.id)),
            trendingItems: z.filter(i => qe.includes(i.id))
        },
        getters: {
            filterCategoryId: ({
                state: i
            }) => i.filterCategoryId,
            filteredItems({
                state: i
            }) {
                return i.filterCategoryId ? i.items.filter(t => t.categoryId === i.filterCategoryId) : i.items
            },
            items: ({
                state: i
            }) => i.items,
            categories: ({
                state: i
            }) => i.categories,
            favoriteItems: ({
                state: i
            }) => i.favoriteItems,
            recentItems: ({
                state: i
            }) => i.recentItems,
            searchResults: ({
                state: i
            }) => i.searchResults,
            searchState: ({
                state: i
            }) => i.searchState,
            cart: ({
                state: i
            }) => i.cart,
            cartTotal({
                state: i
            }) {
                let t = 0;
                return i.cart.forEach(a => {
                    t += a.quantity * a.price
                }), S(t)
            },
            popularItems: ({
                state: i
            }) => i.popularItems,
            trendingItems: ({
                state: i
            }) => i.trendingItems
        },
        actions: {
            setFilterCategoryId({
                state: i
            }, t) {
                i.filterCategoryId = t
            },
            emptyCart({
                state: i
            }) {
                i.cart = [], localStorage.cart = JSON.stringify(i.cart)
            },
            updateCartQuantity({
                state: i
            }, {
                quantity: t,
                obj: a
            }) {
                a.quantity = t, t === 0 && i.cart.splice(i.cart.indexOf(a), 1), i.cart = [...i.cart], localStorage.cart = JSON.stringify(i.cart)
            },
            addToCart({
                state: i
            }, {
                item: t,
                quantity: a,
                price: r,
                priceTitle: s
            }) {
                const l = i.cart.filter(o => o.item.id === t.id && o.price === r)[0];
                l ? l.quantity += a : i.cart.push({
                    quantity: a,
                    item: t,
                    price: r,
                    priceTitle: s
                }), i.cart = [...i.cart], localStorage.cart = JSON.stringify(i.cart)
            },
            addRecentItem({
                state: i
            }, t) {
                i.recentItems.filter(r => r.id === t.id)[0] || (i.recentItems.unshift(t), i.recentItems = [...i.recentItems].slice(0, 6), localStorage.recentItems = JSON.stringify(i.recentItems))
            },
            addFavoriteItem({
                state: i
            }, t) {
                i.favoriteItems.filter(r => r.id === t.id)[0] || (i.favoriteItems.push(t), i.favoriteItems = [...i.favoriteItems], localStorage.favoriteItems = JSON.stringify(i.favoriteItems))
            },
            removeFavoriteItem({
                state: i
            }, t) {
                const a = i.favoriteItems.filter(r => r.id === t.id)[0];
                !a || (i.favoriteItems.splice(i.favoriteItems.indexOf(a), 1), i.favoriteItems = [...i.favoriteItems], localStorage.favoriteItems = JSON.stringify(i.favoriteItems))
            },
            setSearch({
                state: i
            }, t) {
                typeof t.query != "undefined" && (i.searchQuery = t.query), typeof t.state != "undefined" && (i.searchState = t.state), typeof t.results != "undefined" && (i.searchResults = t.results)
            },
            search({
                state: i,
                dispatch: t
            }, a) {
                if (a.trim().length === 0) {
                    t("setSearch", {
                        query: a,
                        state: "idle",
                        results: []
                    });
                    return
                }
                clearTimeout(P), P = setTimeout(async () => {
                    if (a === i.searchQuery) return;
                    t("setSearch", {
                        query: a,
                        state: "loading",
                        results: []
                    });
                    const r = i.items.filter(({
                        title: s,
                        subtitle: l
                    }) => s.toLowerCase().includes(a.toLowerCase()) || l.toLowerCase().includes(a.toLowerCase()));
                    if (r.length === 0) {
                        t("setSearch", {
                            state: "empty",
                            results: []
                        });
                        return
                    }
                    t("setSearch", {
                        state: "results",
                        results: [...r]
                    })
                }, 300)
            }
        }
    });

function je(i, {
    $f7: t,
    $el: a,
    $onMounted: r,
    $onBeforeUnmount: s
}) {
    const l = !localStorage.onboardingFinished;
    let o;
    const u = () => {
            o = t.popup.create({
                el: a.value,
                opened: !0
            }), o.open(!1)
        },
        f = () => {
            o && o.destroy()
        };
    r(() => {
        !l || u()
    }), s(() => {
        f()
    });
    const g = () => {
            document.querySelector("swiper-container").swiper.slideNext()
        },
        h = () => {
            t.popup.close(".popup-onboarding", !0), localStorage.onboardingFinished = !0
        };
    return () => l ? e("div", {
        class: "popup popup-onboarding onboarding popup-tablet-fullscreen modal-in"
    }, e("swiper-container", {
        "observe-parents": "true",
        speed: "600",
        "resistance-ratio": "0",
        parallax: "true",
        pagination: "true"
    }, e("swiper-slide", null, e("div", {
        class: "onboarding-images"
    }, e("img", {
        "data-swiper-parallax-x": "-300",
        src: "images/pizza/diablo.png"
    }), e("img", {
        "data-swiper-parallax-x": "-150",
        src: "images/burgers/big-tasty.png"
    }), e("img", {
        "data-swiper-parallax-x": "0",
        src: "images/desserts/apple-pie.png"
    })), e("div", {
        class: "onboarding-content"
    }, e("div", {
        class: "onboarding-title"
    }, "Best food delivery service in the world!"), e("div", {
        class: "onboarding-text"
    }, "The best and fresh products, amazing flavors, 5-star reviews."), e("div", {
        class: "onboarding-next"
    }, e("a", {
        href: "#",
        class: "button button-large button-round button-fill",
        onClick: g
    }, "Next")))), e("swiper-slide", null, e("div", {
        class: "onboarding-images"
    }, e("img", {
        "data-swiper-parallax-x": "-300",
        src: "images/pizza/pepperoni.png"
    }), e("img", {
        "data-swiper-parallax-x": "-150",
        src: "images/burgers/bigmac.png"
    }), e("img", {
        "data-swiper-parallax-x": "0",
        src: "images/drinks/pepsi.png"
    })), e("div", {
        class: "onboarding-content"
    }, e("div", {
        class: "onboarding-title"
    }, "Discover our award winning dishes"), e("div", {
        class: "onboarding-text"
    }, "Burgers, pizza, drinks and bakery."), e("div", {
        class: "onboarding-next"
    }, e("a", {
        href: "#",
        class: "button button-large button-round button-fill",
        onClick: h
    }, "Get Started!")))))) : e("div", null)
}

function Je(i, t) {
    const {
        $ref: a,
        $f7: r,
        $f7ready: s
    } = t, l = a("home"), o = u => {
        l.value = u, r.tab.show(`#${u}`)
    };
    return s(() => {
        r.on("tabShow", u => {
            l.value = u.id
        })
    }), () => e("div", {
        class: "panel panel-left panel-init panel-cover side-tabs-panel",
        "data-visible-breakpoint": "768"
    }, e("div", {
        class: "side-tab-links"
    }, e("a", {
        href: "#",
        class: `side-tab-link ${l.value==="home"?"side-tab-link-active":""}`,
        onClick: () => o("home")
    }, e("svg", {
        width: "9",
        height: "64",
        viewBox: "0 0 9 64",
        xmlns: "http://www.w3.org/2000/svg"
    }, e("path", {
        d: "M-2.64842e-05 61.982C-2.73021e-05 64.2205 -2.8595e-05 64.5383 -3.05176e-05 62C-3.05176e-05 61.994 -2.91773e-05 61.988 -2.64842e-05 61.982C-2.31245e-05 52.7865 -2.77805e-05 11.1798 -2.97298e-05 2.00794C-3.0255e-05 2.00529 -3.05176e-05 2.00264 -3.05176e-05 1.99999C-3.05176e-05 -0.534521 -3.02037e-05 -0.221455 -2.97298e-05 2.00794C0.00304393 17.5014 9 21.5018 9 32C9 42.4959 0.0069261 46.4969 -2.64842e-05 61.982Z"
    }), e("path", {
        d: "M-2.97298e-05 2.00794C-3.02037e-05 -0.221455 -3.05176e-05 -0.534521 -3.05176e-05 1.99999C-3.05176e-05 2.00264 -3.0255e-05 2.00529 -2.97298e-05 2.00794Z"
    })), e("i", {
        class: "icon f7-icons if-ios"
    }, "house_alt_fill"), e("i", {
        class: "icon material-icons if-md"
    }, "home")), e("a", {
        href: "#",
        class: `side-tab-link ${l.value==="favorites"?"side-tab-link-active":""}`,
        onClick: () => o("favorites")
    }, e("svg", {
        width: "9",
        height: "64",
        viewBox: "0 0 9 64",
        xmlns: "http://www.w3.org/2000/svg"
    }, e("path", {
        d: "M-2.64842e-05 61.982C-2.73021e-05 64.2205 -2.8595e-05 64.5383 -3.05176e-05 62C-3.05176e-05 61.994 -2.91773e-05 61.988 -2.64842e-05 61.982C-2.31245e-05 52.7865 -2.77805e-05 11.1798 -2.97298e-05 2.00794C-3.0255e-05 2.00529 -3.05176e-05 2.00264 -3.05176e-05 1.99999C-3.05176e-05 -0.534521 -3.02037e-05 -0.221455 -2.97298e-05 2.00794C0.00304393 17.5014 9 21.5018 9 32C9 42.4959 0.0069261 46.4969 -2.64842e-05 61.982Z"
    }), e("path", {
        d: "M-2.97298e-05 2.00794C-3.02037e-05 -0.221455 -3.05176e-05 -0.534521 -3.05176e-05 1.99999C-3.05176e-05 2.00264 -3.0255e-05 2.00529 -2.97298e-05 2.00794Z"
    })), e("i", {
        class: "icon f7-icons if-ios"
    }, "heart_fill"), e("i", {
        class: "icon material-icons if-md"
    }, "favorite")), e("a", {
        href: "#",
        class: `side-tab-link ${l.value==="cart"?"side-tab-link-active":""}`,
        onClick: () => o("cart")
    }, e("svg", {
        width: "9",
        height: "64",
        viewBox: "0 0 9 64",
        xmlns: "http://www.w3.org/2000/svg"
    }, e("path", {
        d: "M-2.64842e-05 61.982C-2.73021e-05 64.2205 -2.8595e-05 64.5383 -3.05176e-05 62C-3.05176e-05 61.994 -2.91773e-05 61.988 -2.64842e-05 61.982C-2.31245e-05 52.7865 -2.77805e-05 11.1798 -2.97298e-05 2.00794C-3.0255e-05 2.00529 -3.05176e-05 2.00264 -3.05176e-05 1.99999C-3.05176e-05 -0.534521 -3.02037e-05 -0.221455 -2.97298e-05 2.00794C0.00304393 17.5014 9 21.5018 9 32C9 42.4959 0.0069261 46.4969 -2.64842e-05 61.982Z"
    }), e("path", {
        d: "M-2.97298e-05 2.00794C-3.02037e-05 -0.221455 -3.05176e-05 -0.534521 -3.05176e-05 1.99999C-3.05176e-05 2.00264 -3.0255e-05 2.00529 -2.97298e-05 2.00794Z"
    })), e("i", {
        class: "icon f7-icons if-ios"
    }, "cart_fill"), e("i", {
        class: "icon material-icons if-md"
    }, "shopping_cart"))))
}
var Ve = () => () => e("div", {
    id: "app"
}, e(Je, null), e("div", {
    class: "views tabs safe-areas"
}, e("div", {
    class: "toolbar tabbar toolbar-bottom"
}, e("div", {
    class: "toolbar-inner"
}, e("a", {
    href: "#home",
    class: "tab-link tab-link-active"
}, e("i", {
    class: "icon f7-icons if-ios"
}, "house_alt_fill"), e("i", {
    class: "icon material-icons if-md"
}, "home")), e("a", {
    href: "#favorites",
    class: "tab-link"
}, e("i", {
    class: "icon f7-icons if-ios"
}, "heart_fill"), e("i", {
    class: "icon material-icons if-md"
}, "favorite")), e("a", {
    href: "#cart",
    class: "tab-link"
}, e("i", {
    class: "icon f7-icons if-ios"
}, "cart_fill"), e("i", {
    class: "icon material-icons if-md"
}, "shopping_cart")))), e("div", {
    id: "home",
    class: "view view-main view-init tab tab-active",
    "data-url": "/"
}), e("div", {
    id: "favorites",
    class: "view view-init tab",
    "data-url": "/favorites/"
}), e("div", {
    id: "cart",
    class: "view view-init tab",
    "data-url": "/cart/"
})), e(je, null));
new T({
    name: "Seven Burger",
    theme: "auto",
    el: "#app",
    component: Ve,
    colors: {
        primary: "#f54748"
    },
    darkMode: "auto",
    store: Re,
    routes: De,
    serviceWorker: {
        path: "/service-worker.js"
    }
});