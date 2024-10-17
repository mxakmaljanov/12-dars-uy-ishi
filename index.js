//1-masla
//const p = [
//    { n: "Laptop", pr: 1000, s: 150 },
//    { n: "Phone", pr: 500, s: 300 },
//    { n: "Watch", pr: 200, s: 100 },
//];
//function sortProducts(a, k, o = 'asc') {
//    return a.sort((x, y) => {
//        if (o === 'asc') {
//            return x[k] - y[k];
//        } else {
//            return y[k] - x[k];
//        }
//    });
//}
//console.log(sortProducts(p, 'pr', 'asc'));
//2-masla
//const s = [
//    { n: "Akmal", g: [85, 90, 80] },
//    { n: "Salim", g: [60, 70, 65] },
//    { n: "Nozim", g: [50, 40, 55] },
//];
//function calculateAverage(g) {
//    const t = g.reduce((a, b) => a + b, 0);
//    return t / g.length;
//}
//function lowAverageStudents(s) {
//    return s.filter(st => calculateAverage(st.g) < 70);
//}
//console.log(lowAverageStudents(s));
//4-masla
//const p = [
//    { n: "Laptop", pr: 1000, q: 2, t: 100 },
//    { n: "Phone", pr: 500, q: 3, t: 50 },
//    { n: "Shoes", pr: 100, q: 4, t: 10 }
//];
//function calculateFinalPrice(p) {
//    return p.map(x => ({
//        n: x.n,
//        f: (x.pr * x.q) + (x.t * x.q)
//    }));
//}
//console.log(calculateFinalPrice(p));
//5-masla
//const b = [
//    { t: "Book A", a: "Author A" },
//    { t: "Book B", a: "Author A" },
//    { t: "Book C", a: "Author B" },
//    { t: "Book D", a: "Author C" }
//];
//function uniqueAuthors(b) {
//    const a = new Set(b.map(x => x.a));
//    return [...a];
//console.log(uniqueAuthors(b));
//6-masla
//const d = [
//    { e: "Event A", dt: new Date("2023-10-01") },
//    { e: "Event B", dt: new Date("2022-12-15") },
//    { e: "Event C", dt: new Date("2024-01-10") }
//];
//function sortEventsByDate(d, o = 'asc') {
//    return d.sort((x, y) => {
//        return o === 'asc' ? x.dt - y.dt : y.dt - x.dt;
//    });
//}
//console.log(sortEventsByDate(d, 'asc'));
//8-masla
//const b = [
//    { t: "Book A", y: 2001 },
//    { t: "Book B", y: 1995 },
//    { t: "Book C", y: 2010 },
//    { t: "Book D", y: 2020 }
//];
//function sortBooksByYear(b, o = 'asc') {
//    return b.sort((x, y) => {
//        return o === 'asc' ? x.y - y.y : y.y - x.y;
//    });
//}
//console.log(sortBooksByYear(b, 'asc'));
//9-masla
//const p = [
//    { n: "Laptop", pr: 1000, s: false },
//    { n: "Phone", pr: 500, s: false },
//    { n: "Shoes", pr: 100, s: false }
//];
//function markAllAsSold(p) {
//    return p.map(x => ({ ...x, s: true }));
//}
//console.log(markAllAsSold(p));
//11-masla
//const p = [
//    { n: "Laptop", q: 2 },
//    { n: "Phone", q: 3 },
//    { n: "Laptop", q: 1 },
//    { n: "Shoes", q: 4 }
//];
//function mergeSimilarProducts(p) {
//    const m = {};
//    
//    p.forEach(x => {
//        if (m[x.n]) {
//            m[x.n] += x.q;
//        } else {
//            m[x.n] = x.q;
//        }
//    });
//    
//    return Object.entries(m).map(([n, q]) => ({ n, q }));
//}
//console.log(mergeSimilarProducts(p));
//12-masla
//const p = [
//    { n: "Laptop", c: "Electronics" },
//    { n: "Phone", c: "Electronics" },
//    { n: "Shoes", c: "Fashion" }
//];
//function groupProductsByCategory(p) {
//    return p.reduce((a, x) => {
//        (a[x.c] = a[x.c] || []).push(x);
//        return a;
//    }, {});
//}
//console.log(groupProductsByCategory(p));